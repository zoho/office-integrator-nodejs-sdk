import {SDKException} from "../../routes/exception/sdk_exception.js";
import {Constants} from "./constants.js";
import * as fs from "fs";
import * as path from "path";

/**
 * This class handles the file stream and name.
 */
class StreamWrapper {

    name;

    stream;

    file;

    /**
     * Creates a StreamWrapper class instance with the specified parameters.
     * @param {string} name - A String containing the file name.
     * @param {object} stream - A InputStream containing the file stream.
     * @param {string} filePath - A String containing the absolute file path.
     */
    constructor(name = null, stream = null, filePath = null) {
        if (filePath == null) {
            this.name = name;

            this.stream = stream;
        }
        else {
            if (!fs.existsSync(filePath)) {
                throw new SDKException(Constants.FILE_ERROR, Constants.FILE_DOES_NOT_EXISTS);
            }

            this.file = filePath;

            this.name = path.basename(filePath);

            this.stream = fs.createReadStream(filePath);
        }
    }

    /**
     * This is a getter method to get the file name.
     * @returns A String representing the file name.
     */
    getName() {
        return this.name;
    }

    /**
     * This is a getter method to get the file input stream.
     * @returns A ReadStream representing the file input stream.
     */
    getStream() {
        return this.stream;
    }
}

export {
    StreamWrapper as MasterModel,
    StreamWrapper as StreamWrapper
}
