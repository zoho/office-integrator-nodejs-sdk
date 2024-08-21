import {SDKException} from "../../../../../routes/exception/sdk_exception.js";
import {Constants} from "../../../../../utils/util/constants.js";

class FileDeleteSuccessResponse{

	docDelete;
	keyModified = new Map();
	/**
	 * The method to get the docDelete
	 * @returns {String} A String representing the docDelete
	 */
	getDocDelete()	{
		return this.docDelete;

	}

	/**
	 * The method to set the value to docDelete
	 * @param {String} docDelete A String representing the docDelete
	 */
	setDocDelete(docDelete)	{
		if((docDelete != null) && (!(Object.prototype.toString.call(docDelete) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: docDelete EXPECTED TYPE: String", null, null);
		}
		this.docDelete = docDelete;
		this.keyModified.set("doc_delete", 1);

	}

	/**
	 * The method to check if the user has modified the given key
	 * @param {String} key A String representing the key
	 * @returns {number} A number representing the modification
	 */
	isKeyModified(key)	{
		if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
		}
		if(this.keyModified.has(key))	{
			return this.keyModified.get(key);
		}
		return null;

	}

	/**
	 * The method to mark the given key as modified
	 * @param {String} key A String representing the key
	 * @param {number} modification A number representing the modification
	 */
	setKeyModified(key, modification)	{
		if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
		}
		if((modification != null) && (!(Object.prototype.toString.call(modification) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modification EXPECTED TYPE: number", null, null);
		}
		this.keyModified.set(key, modification);

	}


}
export {
	FileDeleteSuccessResponse as MasterModel,
	FileDeleteSuccessResponse as FileDeleteSuccessResponse
}
