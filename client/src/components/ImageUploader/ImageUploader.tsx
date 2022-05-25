import React, { useRef, useState, useEffect } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { Button } from '../Button/Button';

export type ImageUploaderProps = {
  name?: string;
  register?: UseFormRegisterReturn;
};

export const ImageUploader = ({ register, name }: ImageUploaderProps) => {
  const [file, setFile] = useState<File>();
  const [previewUrl, setPreviewUrl] = useState<string>();
  const [isValid, setIsValid] = useState(false);
  const imagePickerRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      if (!fileReader.result) {
        setPreviewUrl(undefined);
        return;
      }
      setPreviewUrl(fileReader.result as string);
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  const pickImageHandler = () => {
    imagePickerRef.current?.click();
  };
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    let pickedFile;
    let fieldIsValid = isValid;
    if (event.target.files || event.target.files === 1) {
      pickedFile = event.target.files[0];
      console.log(pickedFile);
      setFile(pickedFile);
      setIsValid(true);
      fieldIsValid = true;
    } else {
      setIsValid(false);
      fieldIsValid = false;
    }
  };
  return (
    <div>
      <input
        {...register}
        type="file"
        ref={imagePickerRef}
        accept=".jpg, .png, .jpeg"
        style={{ display: 'none' }}
        name={name}
        onChange={onChangeHandler}
      />
      <div>
        <div>
          {previewUrl && <img src={previewUrl} alt="preview" />}
          {!previewUrl && <p>Please pick an image</p>}
        </div>
        <Button type="button" variant="secondary" onClick={pickImageHandler}>
          Pick avatar
        </Button>
      </div>
    </div>
  );
};
