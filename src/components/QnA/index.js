import React from "react";
import { observer } from "mobx-react-lite";
import { message, Upload, notification } from "antd";
import { FiUploadCloud } from "react-icons/fi";
import * as tf from "@tensorflow/tfjs";
import * as qna from "@tensorflow-models/qna";
import "antd/dist/antd.css";
import { Box, Heading, Center } from "@chakra-ui/react";

const { Dragger } = Upload;

/** Client side file upload component using Ant Design UI Component. For the server side, see Express repo - which uses Multer to upload the files */

const ImageUpload = observer(() => {
  const qnaKnowledgeBase = []; // KB content from DB, manual
  const qnaModel = null; // tensorflow model
  const qnaContent = null; // merged content for searching
  const loadQnaData = false; // loaded flag only

  const loadQnaModel = async () => {
    const loadedModel = await qna.load();
    this.qnaModel = loadedModel;
  };

  const props = {
    name: "file",
    multiple: true,
    action: `${process.env.API_ENDPOINT}/fileupload`,

    onChange(info) {
      const { status } = info.file;

      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }

      if (status === "done") {
        const key = `open${Date.now()}`;
        //   Filename is prepended with current timestamp via ExpressJs/Multer = a unique name

        notification.open({
          message: "File Uploaded Successfully",
          description: `Here is your new filename:- ${info.file.response[0].filename}`,
          duration: 0,
          key,
        });

        console.log("New Filename - ", info.file.response[0].filename);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <Box width="80%" ml={182} height={300}>
      <Heading mb={4} pt={12}>
        File Upload
      </Heading>
      <p className="ant-upload-hint">Front end file upload component demo.</p>

      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <Center py={6}>
            <FiUploadCloud className="" style={{ fontSize: "50px", color: "teal" }} />
          </Center>
        </p>
        <p className="ant-upload-text">Click or drag file(s) to upload</p>
        <p className="ant-upload-hint">Support for single or multiple files.</p>
      </Dragger>
    </Box>
  );
});

export default ImageUpload;
