import { IsArray, IsNotEmpty, IsOptional, IsString, IsUrl } from 'class-validator';

export class CreateRecipeDto {
  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsString()
  @IsNotEmpty()
  description!: string;

  @IsOptional()
  @IsUrl({}, { message: 'imageUrl must be a valid URL' })
  imageUrl?: string;

  @IsOptional()
  @IsUrl({}, { message: 'videoUrl must be a valid URL' })
  videoUrl?: string;

  @IsArray()
  ingredients!: string[];

  @IsArray()
  steps!: string[];
}
