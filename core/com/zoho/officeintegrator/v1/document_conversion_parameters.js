import {StreamWrapper} from "../../../../../utils/util/stream_wrapper.js";
import {SDKException} from "../../../../../routes/exception/sdk_exception.js";
import {Constants} from "../../../../../utils/util/constants.js";

class DocumentConversionParameters{

	document;
	url;
	password;
	outputOptions;
	keyModified = new Map();
	/**
	 * The method to get the document
	 * @returns {StreamWrapper} An instance of StreamWrapper
	 */
	getDocument()	{
		return this.document;

	}

	/**
	 * The method to set the value to document
	 * @param {StreamWrapper} document An instance of StreamWrapper
	 */
	setDocument(document)	{
		if((document != null) && (!(document instanceof StreamWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: document EXPECTED TYPE: StreamWrapper", null, null);
		}
		this.document = document;
		this.keyModified.set("document", 1);

	}

	/**
	 * The method to get the url
	 * @returns {String} A String representing the url
	 */
	getUrl()	{
		return this.url;

	}

	/**
	 * The method to set the value to url
	 * @param {String} url A String representing the url
	 */
	setUrl(url)	{
		if((url != null) && (!(Object.prototype.toString.call(url) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: url EXPECTED TYPE: String", null, null);
		}
		this.url = url;
		this.keyModified.set("url", 1);

	}

	/**
	 * The method to get the password
	 * @returns {String} A String representing the password
	 */
	getPassword()	{
		return this.password;

	}

	/**
	 * The method to set the value to password
	 * @param {String} password A String representing the password
	 */
	setPassword(password)	{
		if((password != null) && (!(Object.prototype.toString.call(password) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: password EXPECTED TYPE: String", null, null);
		}
		this.password = password;
		this.keyModified.set("password", 1);

	}

	/**
	 * The method to get the outputOptions
	 * @returns {DocumentConversionOutputOptions} An instance of DocumentConversionOutputOptions
	 */
	getOutputOptions()	{
		return this.outputOptions;

	}

	/**
	 * The method to set the value to outputOptions
	 * @param {DocumentConversionOutputOptions} outputOptions An instance of DocumentConversionOutputOptions
	 */
	async setOutputOptions(outputOptions)	{
		const DocumentConversionOutputOptions = (await (import("./document_conversion_output_options.js"))).MasterModel;
		if((outputOptions != null) && (!(outputOptions instanceof DocumentConversionOutputOptions)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: outputOptions EXPECTED TYPE: DocumentConversionOutputOptions", null, null);
		}
		this.outputOptions = outputOptions;
		this.keyModified.set("output_options", 1);

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
	DocumentConversionParameters as MasterModel,
	DocumentConversionParameters as DocumentConversionParameters
}
