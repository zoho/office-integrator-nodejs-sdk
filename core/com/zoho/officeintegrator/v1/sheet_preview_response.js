import {SDKException} from "../../../../../routes/exception/sdk_exception.js";
import {Constants} from "../../../../../utils/util/constants.js";

class SheetPreviewResponse{

	gridviewUrl;
	previewUrl;
	documentId;
	sessionId;
	sessionDeleteUrl;
	documentDeleteUrl;
	keyModified = new Map();
	/**
	 * The method to get the gridviewUrl
	 * @returns {String} A String representing the gridviewUrl
	 */
	getGridviewUrl()	{
		return this.gridviewUrl;

	}

	/**
	 * The method to set the value to gridviewUrl
	 * @param {String} gridviewUrl A String representing the gridviewUrl
	 */
	setGridviewUrl(gridviewUrl)	{
		if((gridviewUrl != null) && (!(Object.prototype.toString.call(gridviewUrl) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: gridviewUrl EXPECTED TYPE: String", null, null);
		}
		this.gridviewUrl = gridviewUrl;
		this.keyModified.set("gridview_url", 1);

	}

	/**
	 * The method to get the previewUrl
	 * @returns {String} A String representing the previewUrl
	 */
	getPreviewUrl()	{
		return this.previewUrl;

	}

	/**
	 * The method to set the value to previewUrl
	 * @param {String} previewUrl A String representing the previewUrl
	 */
	setPreviewUrl(previewUrl)	{
		if((previewUrl != null) && (!(Object.prototype.toString.call(previewUrl) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: previewUrl EXPECTED TYPE: String", null, null);
		}
		this.previewUrl = previewUrl;
		this.keyModified.set("preview_url", 1);

	}

	/**
	 * The method to get the documentId
	 * @returns {String} A String representing the documentId
	 */
	getDocumentId()	{
		return this.documentId;

	}

	/**
	 * The method to set the value to documentId
	 * @param {String} documentId A String representing the documentId
	 */
	setDocumentId(documentId)	{
		if((documentId != null) && (!(Object.prototype.toString.call(documentId) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: documentId EXPECTED TYPE: String", null, null);
		}
		this.documentId = documentId;
		this.keyModified.set("document_id", 1);

	}

	/**
	 * The method to get the sessionId
	 * @returns {String} A String representing the sessionId
	 */
	getSessionId()	{
		return this.sessionId;

	}

	/**
	 * The method to set the value to sessionId
	 * @param {String} sessionId A String representing the sessionId
	 */
	setSessionId(sessionId)	{
		if((sessionId != null) && (!(Object.prototype.toString.call(sessionId) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sessionId EXPECTED TYPE: String", null, null);
		}
		this.sessionId = sessionId;
		this.keyModified.set("session_id", 1);

	}

	/**
	 * The method to get the sessionDeleteUrl
	 * @returns {String} A String representing the sessionDeleteUrl
	 */
	getSessionDeleteUrl()	{
		return this.sessionDeleteUrl;

	}

	/**
	 * The method to set the value to sessionDeleteUrl
	 * @param {String} sessionDeleteUrl A String representing the sessionDeleteUrl
	 */
	setSessionDeleteUrl(sessionDeleteUrl)	{
		if((sessionDeleteUrl != null) && (!(Object.prototype.toString.call(sessionDeleteUrl) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sessionDeleteUrl EXPECTED TYPE: String", null, null);
		}
		this.sessionDeleteUrl = sessionDeleteUrl;
		this.keyModified.set("session_delete_url", 1);

	}

	/**
	 * The method to get the documentDeleteUrl
	 * @returns {String} A String representing the documentDeleteUrl
	 */
	getDocumentDeleteUrl()	{
		return this.documentDeleteUrl;

	}

	/**
	 * The method to set the value to documentDeleteUrl
	 * @param {String} documentDeleteUrl A String representing the documentDeleteUrl
	 */
	setDocumentDeleteUrl(documentDeleteUrl)	{
		if((documentDeleteUrl != null) && (!(Object.prototype.toString.call(documentDeleteUrl) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: documentDeleteUrl EXPECTED TYPE: String", null, null);
		}
		this.documentDeleteUrl = documentDeleteUrl;
		this.keyModified.set("document_delete_url", 1);

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
	SheetPreviewResponse as MasterModel,
	SheetPreviewResponse as SheetPreviewResponse
}
