import React, { useEffect, useState } from "react";
import { useDropzone, FileWithPath } from "react-dropzone";

import "./style.css";
interface Props {
  setAvatarUrl?: (val: any) => void;
  size?: number;
  avatar?: string;
}
const Uploader = ({
  setAvatarUrl = () => {},
  size = 100,
  avatar = "https://via.placeholder.com/80",
}: Props) => {
  const [imageSrc, setImageSrc] = useState(avatar);
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({});
  const isdragactive = useDropzone({}).isDragActive.toString();

  // const files = acceptedFiles.map((file: FileWithPath) => {(
  //   <ListItem key={file.path}>
  //     {file.path} - {Math.round(file.size / 1000)} kB
  //   </ListItem>
  // )});
  useEffect(() => {
    if (acceptedFiles[0]) {
      const src = URL.createObjectURL(acceptedFiles[0]);
      setImageSrc(src);
      acceptedFiles.map((file: FileWithPath) => setAvatarUrl(file.path));
    }
  }, [acceptedFiles, setAvatarUrl]);

  return (
    <section
      className="wfp--dropzone"
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <div
        {...getRootProps({ isdragactive })}
        style={{ height: `${size}px` }}
        className="wrapper-avatar"
      >
        <input {...getInputProps()} />
        <img
          className="avatar-dropzone"
          style={{ width: `${size}px`, height: `${size}px` }}
          width={size}
          height={size}
          src={imageSrc}
          alt=""
        />
      </div>
    </section>
  );
};

export default Uploader;
