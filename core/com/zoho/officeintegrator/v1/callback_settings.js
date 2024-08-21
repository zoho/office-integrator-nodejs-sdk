import {SDKException} from "../../../../../routes/exception/sdk_exception.js";
import {Constants} from "../../../../../utils/util/constants.js";

class CallbackSettings{

	saveFormat;
	saveUrl;
	httpMethodType;
	retries;
	timeout;
	saveUrlParams;
	saveUrlHeaders;
	keyModified = new Map();
	/**
	 * The method to get the saveFormat
	 * @returns {String} A String representing the saveFormat
	 */
	getSaveFormat()	{
		return this.saveFormat;

	}

	/**
	 * The method to set the value to saveFormat
	 * @param {String} saveFormat A String representing the saveFormat
	 */
	setSaveFormat(saveFormat)	{
		if((saveFormat != null) && (!(Object.prototype.toString.call(saveFormat) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: saveFormat EXPECTED TYPE: String", null, null);
		}
		this.saveFormat = saveFormat;
		this.keyModified.set("save_format", 1);

	}

	/**
	 * The method to get the saveUrl
	 * @returns {String} A String representing the saveUrl
	 */
	getSaveUrl()	{
		return this.saveUrl;

	}

	/**
	 * The method to set the value to saveUrl
	 * @param {String} saveUrl A String representing the saveUrl
	 */
	setSaveUrl(saveUrl)	{
		if((saveUrl != null) && (!(Object.prototype.toString.call(saveUrl) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: saveUrl EXPECTED TYPE: String", null, null);
		}
		this.saveUrl = saveUrl;
		this.keyModified.set("save_url", 1);

	}

	/**
	 * The method to get the httpMethodType
	 * @returns {String} A String representing the httpMethodType
	 */
	getHttpMethodType()	{
		return this.httpMethodType;

	}

	/**
	 * The method to set the value to httpMethodType
	 * @param {String} httpMethodType A String representing the httpMethodType
	 */
	setHttpMethodType(httpMethodType)	{
		if((httpMethodType != null) && (!(Object.prototype.toString.call(httpMethodType) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: httpMethodType EXPECTED TYPE: String", null, null);
		}
		this.httpMethodType = httpMethodType;
		this.keyModified.set("http_method_type", 1);

	}

	/**
	 * The method to get the retries
	 * @returns {number} A number representing the retries
	 */
	getRetries()	{
		return this.retries;

	}

	/**
	 * The method to set the value to retries
	 * @param {number} retries A number representing the retries
	 */
	setRetries(retries)	{
		if((retries != null) && (!(Object.prototype.toString.call(retries) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: retries EXPECTED TYPE: number", null, null);
		}
		this.retries = retries;
		this.keyModified.set("retries", 1);

	}

	/**
	 * The method to get the timeout
	 * @returns {number} A number representing the timeout
	 */
	getTimeout()	{
		return this.timeout;

	}

	/**
	 * The method to set the value to timeout
	 * @param {number} timeout A number representing the timeout
	 */
	setTimeout(timeout)	{
		if((timeout != null) && (!(Object.prototype.toString.call(timeout) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: timeout EXPECTED TYPE: number", null, null);
		}
		this.timeout = timeout;
		this.keyModified.set("timeout", 1);

	}

	/**
	 * The method to get the saveUrlParams
	 * @returns {Map} A Map representing the saveUrlParams
	 */
	getSaveUrlParams()	{
		return this.saveUrlParams;

	}

	/**
	 * The method to set the value to saveUrlParams
	 * @param {Map} saveUrlParams A Map representing the saveUrlParams
	 */
	setSaveUrlParams(saveUrlParams)	{
		if((saveUrlParams != null) && (!(Object.prototype.toString.call(saveUrlParams) == "[object Map]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: saveUrlParams EXPECTED TYPE: Map", null, null);
		}
		this.saveUrlParams = saveUrlParams;
		this.keyModified.set("save_url_params", 1);

	}

	/**
	 * The method to get the saveUrlHeaders
	 * @returns {Map} A Map representing the saveUrlHeaders
	 */
	getSaveUrlHeaders()	{
		return this.saveUrlHeaders;

	}

	/**
	 * The method to set the value to saveUrlHeaders
	 * @param {Map} saveUrlHeaders A Map representing the saveUrlHeaders
	 */
	setSaveUrlHeaders(saveUrlHeaders)	{
		if((saveUrlHeaders != null) && (!(Object.prototype.toString.call(saveUrlHeaders) == "[object Map]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: saveUrlHeaders EXPECTED TYPE: Map", null, null);
		}
		this.saveUrlHeaders = saveUrlHeaders;
		this.keyModified.set("save_url_headers", 1);

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
	CallbackSettings as MasterModel,
	CallbackSettings as CallbackSettings
}
