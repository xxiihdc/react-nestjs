import { Controller, Get } from '@nestjs/common';

@Controller('image')
export class ImageController {
  private readonly images = [
    'img_0_736_919.jpeg',
    'img_10_736_736.jpeg',
    'img_11_736_912.jpeg',
    'img_12_547_972.jpeg',
    'img_13_735_973.jpeg',
    'img_14_736_1592.jpeg',
    'img_15_736_1594.jpeg',
    'img_16_736_736.jpeg',
    'img_17_736_1204.jpeg',
    'img_18_718_720.jpeg',
    'img_19_3024_4032.jpeg',
    'img_1_736_1592.jpeg',
    'img_20_720_810.jpeg',
    'img_21_736_1312.jpeg',
    'img_2_567_612.jpeg',
    'img_3_736_992.jpeg',
    'img_4_736_981.jpeg',
    'img_5_736_899.jpeg',
    'img_6_736_1472.jpeg',
    'img_7_736_736.jpeg',
    'img_8_4032_3024.jpeg',
    'img_9_736_1308.jpeg',
  ];

  extractImageDetails = (
    image: string,
  ): { name: string; width: number; height: number } => {
    const parts = image.split('_');
    const name = image;
    const width = parseInt(parts[2], 10);
    const height = parseInt(parts[3].split('.')[0], 10);
    return { name, width, height };
  };

  @Get()
  async getImageFiles(): Promise<any> {
    const imageDetails = await Promise.all(
      this.images.map(async (imageName) => {
        return this.extractImageDetails(imageName);
      }),
    );

    return imageDetails;
  }
}
