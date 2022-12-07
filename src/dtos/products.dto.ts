import { IsEnum, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  public name: string;

  @IsString()
  public slug: string;

  @IsString()
  public process: string;

  @IsString()
  public weight: string;

  @IsEnum(['get inquity', 'out of stock'])
  public available: string;

  @IsString()
  public taste: string;

  @IsString()
  public score: string;

  @IsString()
  public variety: string;

  @IsString()
  public description: string;

  @IsString()
  public type: string;

  @IsString()
  public beans: string;

  @IsString()
  public elevation: string;

  @IsString()
  public image: string;
}
