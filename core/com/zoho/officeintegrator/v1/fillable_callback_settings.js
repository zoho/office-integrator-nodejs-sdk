import {SDKException} from "../../../../../routes/exception/sdk_exception.js";
import {Constants} from "../../../../../utils/util/constants.js";

class FillableCallbackSettings{

	output;
	url;
	httpMethodType;
	retries;
	timeout;
	keyModified = new Map();
	/**
	 * The method to get the output
	 * @returns {FillableLinkOutputSettings} An instance of FillableLinkOutputSettings
	 */
	getOutput()	{
		return this.output;

	}

	/**
	 * The method to set the value to output
	 * @param {FillableLinkOutputSettings} output An instance of FillableLinkOutputSettings
	 */
	async setOutput(output)	{
		const FillableLinkOutputSettings = (await (import("./fillable_link_output_settings.js"))).MasterModel;
		if((output != null) && (!(output instanceof FillableLinkOutputSettings)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: output EXPECTED TYPE: FillableLinkOutputSettings", null, null);
		}
		this.output = output;
		this.keyModified.set("output", 1);

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
	FillableCallbackSettings as MasterModel,
	FillableCallbackSettings as FillableCallbackSettings
}
