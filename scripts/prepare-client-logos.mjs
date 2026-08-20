import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const source = '/home/ubuntu/upload/pasted_file_DMrL99_image.png';
const output = '/home/ubuntu/webdev-static-assets/emfoi-client-logos';
const cropSpec = [
  ['intel-technology-provider', [360, 28, 485, 151]],
  ['capital-one', [594, 94, 748, 207]],
  ['accenture', [174, 226, 312, 295]],
  ['universal-service-administrative-company', [146, 388, 353, 462]],
  ['caterpillar', [415, 360, 548, 490]],
  ['oportun', [610, 347, 738, 406]],
];

fs.mkdirSync(output, { recursive: true });
const scriptPath = path.join(output, 'extract_logos.py');
const payload = `from PIL import Image
import os

source = ${JSON.stringify(source)}
output = ${JSON.stringify(output)}
crops = ${JSON.stringify(cropSpec)}
img = Image.open(source).convert('RGBA')

for name, box in crops:
    crop = img.crop(tuple(box)).convert('RGBA')
    pixels = crop.load()
    for y in range(crop.height):
        for x in range(crop.width):
            r, g, b, a = pixels[x, y]
            if r > 240 and g > 240 and b > 240:
                pixels[x, y] = (r, g, b, 0)
    alpha = crop.getchannel('A')
    bounds = alpha.getbbox()
    if bounds:
        crop = crop.crop(bounds)
    crop.save(os.path.join(output, f'{name}.png'))
`;

fs.writeFileSync(scriptPath, payload);
execFileSync('python3', [scriptPath], { stdio: 'inherit' });
fs.unlinkSync(scriptPath);
