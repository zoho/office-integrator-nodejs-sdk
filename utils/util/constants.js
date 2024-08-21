class Constants {
    static TYPE_VS_DATATYPE = new Map([
        ["map", "[object Map]"],
        ["hashmap", "[object Map]"],
        ["string", "[object String]"],
        ["list", "[object Array]"],
        ["long", "[object BigInt]"],
        ["integer", "[object Number]"],
        ["float", "[object Number]"],
        ["double", "[object Number]"],
        ["boolean", "[object Boolean]"],
        ["datetime", "[object Date]"],
        ["date", "[object Date]"]
    ]);

    static SPECIAL_TYPES = new Map([
        ["DateTime", "Date"],
        ["Date", "Date"],
        ["Long", "BigInt"]
    ]);

    static OAUTH_HEADER_PREFIX = "Bearer ";

    static AUTHORIZATION = "Authorization";

    static GRANT_TYPE = "grant_type";

    static GRANT_TYPE_AUTH_CODE = "authorization_code";

    static ACCESS_TOKEN = "access_token";

    static EXPIRES_IN = "expires_in";

    static EXPIRES_IN_SEC = "expires_in_sec";

    static REFRESH_TOKEN = "refresh_token";

    static CLIENT_ID = "client_id";

    static CLIENT_SECRET = "client_secret";

    static REDIRECT_URL = "redirect_url";

    static REDIRECT_URI = "redirect_uri";

    static REQUEST_METHOD_POST = "POST";

    static REQUEST_METHOD_PATCH = "PATCH";

    static CODE = "code";

    static STATUS = "status";

    static MESSAGE = "message";

    static API_EXCEPTION = "API_EXCEPTION";

    static REQUEST_METHOD_PUT = "PUT";

    static REQUEST_METHOD_DELETE = "DELETE";

    static REQUEST_METHOD_GET = "GET";

    static ZOHO_SDK = "X-ZOHO-SDK";

    static SDK_VERSION = "1.0.0";

    static MYSQL_HOST = "localhost";

    static MYSQL_DATABASE_NAME = "zohooauth";

    static MYSQL_USER_NAME = "root";

    static MYSQL_PORT_NUMBER = "3306";

    static GET_TOKEN_DB_ERROR = "Exception in getToken - DBStore : ";

    static GET_TOKENS_DB_ERROR = "Exception in getTokens - DBStore : ";

    static DELETE_TOKEN_DB_ERROR = "Exception in deleteToken - DBStore : ";

    static DELETE_TOKENS_DB_ERROR = "Exception in deleteTokens - DBStore : ";

    static SAVE_TOKEN_DB_ERROR = "Exception in saveToken - DBStore : ";

    static GET_TOKEN_FILE_ERROR = "Exception in getToken - FileStore : ";

    static GET_TOKENS_FILE_ERROR = "Exception in getTokens - FileStore : ";

    static SAVE_TOKEN_FILE_ERROR = "Exception in saveToken - FileStore : ";

    static DELETE_TOKEN_FILE_ERROR = "Exception in deleteToken - FileStore : ";

    static DELETE_TOKENS_FILE_ERROR = "Exception in deleteTokens - FileStore : ";

    static TOKEN_STORE = "TOKEN_STORE";

    static USER_MAIL = "user_mail";

    static GRANT_TOKEN = "grant_token";

    static EXPIRY_TIME = "expiry_time";

    static TOKEN_ERROR = "TOKEN ERROR";

    static ERROR_HASH_FIELD = 'field';

    static ERROR_HASH_EXPECTED_TYPE = 'expected_type';

    static ERROR_HASH_CLASS = 'class';

    static CONTENT_TYPE = 'content-type';

    static INSTANCE_NUMBER = 'instance-number';

    static ERROR_HASH_MEMBER = 'member';

    static NAME = 'name';

    static DATA_TYPE_ERROR = "DATA TYPE ERROR";

    static VALUES = 'values';

    static ACCEPTED_VALUES = 'accepted-values';

    static ACCEPTED_TYPE = 'accepted-type';

    static GIVEN_TYPE = "given-type";

    static GIVEN_LENGTH = "given-length";

    static GIVEN_VALUE = "given-value";

    static UNACCEPTED_VALUES_ERROR = 'UNACCEPTED VALUES ERROR';

    static MIN_LENGTH = "min-length";

    static MAX_LENGTH = "max-length";

    static ERROR_HASH_MAXIMUM_LENGTH = "maximum-length";

    static MAXIMUM_LENGTH_ERROR = "MAXIMUM LENGTH ERROR";

    static ERROR_HASH_MINIMUM_LENGTH = "minimum-length";

    static MINIMUM_LENGTH_ERROR = "MINIMUM LENGTH ERROR";

    static REGEX = "regex";

    static REGEX_MISMATCH_ERROR = "REGEX MISMATCH ERROR";

    static UNIQUE = "unique";

    static UNIQUE_KEY_ERROR = "UNIQUE KEY ERROR";

    static FIRST_INDEX = "first-index";

    static NEXT_INDEX = "next-index";

    static LONG_NAMESPACE = 'Long';

    static BOOLEAN_NAMESPACE = 'Boolean';

    static INTEGER_NAMESPACE = 'Integer';

    static STRING_NAMESPACE = 'String';

    static DOUBLE_NAMESPACE = 'Double';

    static DATETIME_NAMESPACE = 'DateTime';

    static DATE_NAMESPACE = 'Date';

    static FLOAT_NAMESPACE = 'Float';

    static OBJECT_NAMESPACE = 'Object';

    static DOUBLE_COLON = '::';

    static DOT = '.';

    static STREAM_WRAPPER_CLASS_PATH = "utils/util/stream_wrapper";

    static FILE_NAMESPACE = "utils/util/stream_wrapper";

    static CONTENT_DISPOSITION = "content-disposition";

    static PACKAGE_PREFIX = 'com.zoho.';

    static INTERFACE = "interface";

    static CLASSES = "classes";

    static CLASS_KEY = "class";

    static READ_ONLY = "read-only";

    static WRITE_ONLY = "write-only"; // No I18N
	
    static UPDATE_ONLY = "update-only"; // No I18N

    static IS_KEY_MODIFIED = 'is_key_modified';

    static SET_KEY_MODIFIED = "set_key_modified";

    static REQUIRED = "required";

    static REQUIRED_FOR = "required_for";

    static REQUIRED_IN_UPDATE = "required-in-update";

    static MANDATORY_VALUE_ERROR = "MANDATORY VALUE ERROR";

    static MANDATORY_VALUE_NULL_ERROR = "MANDATORY VALUE NULL ERROR";

    static MANDATORY_KEY_ERROR = "Value missing or null for mandatory key(s) :";

    static MANDATORY_KEY_NULL_ERROR = "Null Value for mandatory key : ";

    static LIST_NAMESPACE = "list";

    static MAP_NAMESPACE = "map";

    static HASH_MAP_NAMESPACE = "HashMap";

    static STRUCTURE_NAME = "structure_name";

    static KEYS = "keys";

    static KEY_VALUES = "key_values";

    static INITIALIZATION_ERROR = 'INITIALIZATION ERROR';

    static INITIALIZATION_EXCEPTION = "Exception in initialization : ";

    static SWITCH_USER_EXCEPTION = "Exception in switching user : ";

    static EMAIL = "email";

    static USER_ERROR = "USER ERROR";

    static CLIENT_ID_FIELD = "clientID";

    static CLIENT_SECRET_FIELD = "clientSecret";

    static REDIRECT_URL_FIELD = "redirectURL";

    static TYPE = "type";

    static TYPE_ERROR = "TYPE ERROR";

    static HEADER_PARAM_VALIDATION_ERROR = "Exception in header or param validation";

    static TOKEN = "token";

    static EXPECTED_TOKEN_TYPES = "REFRESH, GRANT";

    static INVALID_CLIENT_ERROR = "INVALID CLIENT ERROR";

    static ERROR_KEY = "error";

    static GET_TOKEN_ERROR = "Exception in getting access token";

    static LOG_FILE_NAME = "sdk_logs.log";

    static TOKEN_FILE = "sdk_tokens.txt"

    static JSON_DETAILS_FILE_PATH = "json_details.json";

    static CONFIG_DIRECTORY = "config";

    static JSON_DETAILS_ERROR = "ERROR IN READING JSONDETAILS FILE";

    static USER = "user";

    static ENVIRONMENT = "environment";

    static STORE = "store";

    static SDK_CONFIG = "sdkConfig";

    static USER_PROXY = "proxy";

    static INDEX = "index";

    static CONTENT_TYPE = 'Content-Type';

    static APPLICATION_JSON_CONTENT_TYPE = 'application/json';

    static EXCEPTION_IS_KEY_MODIFIED = "Exception in calling isKeyModified";

    static EXCEPTION_SET_KEY_MODIFIED = "Exception in calling setKeyModified";

    static ARRAY_TYPE = "[object Array]";

    static ARRAY_KEY = "Array";

    static MAP_TYPE = "[object Map]";

    static OBJECT_TYPE = "[object Object]";

    static OBJECT_KEY = "object";

    static STRING_TYPE = "[object String]";

    static INTEGER_TYPE = "[object Integer]";

    static KEY_VALUES = "keyValues";

    static KEY_MODIFIED = "keyModified";

    static CHOICE_NAMESPACE = "utils/util/choice";

    static MODULE = "module";

    static CHOICE_PATH = "./choice";

    static PACKAGE_NAMESPACE = "core/com/zoho";

    static MODULEPACKAGENAME = "modulePackageName";

    static MODULEDETAILS = "moduleDetails";

    static CALL_DURATION = "call_duration";

    static ACTIVITIES = "activities";

    static FIELDS_LAST_MODIFIED_TIME = "FIELDS-LAST-MODIFIED-TIME";

    static FILE_ID = "file_id";

    static DELETE_FIELD_FILE_ERROR = "Exception in deleting Current User Fields file";

    static DELETE_FIELD_FILES_ERROR = "Exception in deleting all Fields files";

    static DELETE_MODULE_FROM_FIELDFILE_ERROR = "Exception in deleting module from Fields file";

    static HTTP = "http";

    static INVALID_URL_ERROR = "Invalid URL Error";

    static SET_API_URL_EXCEPTION = "Exception in setting API URL : ";

    static AUTHENTICATION_EXCEPTION = "Exception in authenticating current request : ";

    static FORM_REQUEST_EXCEPTION = "Exception in forming request body : ";

    static API_CALL_EXCEPTION = "Exception in current API call execution : ";

    static CORE = "core";

    static SAVE_TOKEN_ERROR = "Exception in saving tokens";

    static CONTENT_TYPE_HEADER = "Content-Type";

    static FILE_BODY_WRAPPER = "file_body_wrapper";

    static USER_NOT_FOUND_ERROR_MESSAGE = "Given user not found in SDK configuration details";

    static USER_NOT_FOUND_ERROR = "USER NOT FOUND ERROR";

    static LINE_TAX = "$line_tax";

    static RESOURCE_PATH_ERROR = "EMPTY_RESOURCE_PATH";

    static RESOURCE_PATH_ERROR_MESSAGE = "Resource Path MUST NOT be null/empty.";

    static INITIALIZATION_SUCCESSFUL = "Initialization successful ";

    static INITIALIZATION_SWITCHED = "Initialization switched ";

    static IN_ENVIRONMENT = " in Environment : ";

    static FOR_EMAIL_ID = "for Email Id : ";

    static FIELD_DETAILS_DIRECTORY = "resources";

    static CANT_DISCLOSE = " ## can't disclose ## ";

    static URL = "URL";

    static HEADERS = "HEADERS";

    static PARAMS = "PARAMS";

    static REQUEST_METHOD = "REQUEST-METHOD";

    static UNDERSCORE = "_";

    static RELATED_LISTS = "Related_Lists";

    static API_NAME = "api_name";

    static HREF = "href";

    static NO_CONTENT_STATUS_CODE = 204;

    static NOT_MODIFIED_STATUS_CODE = 304;

    static EXCEPTION = "Exception ";

    static REFRESH_TOKEN_MESSAGE = "Access Token has expired. Hence refreshing.";

    static PRIMARY = "primary";

    static ID = "id";

    static REQUEST_CATEGORY_CREATE = "CREATE";

    static REQUEST_CATEGORY_UPDATE = "UPDATE";

    static REQUEST_CATEGORY_READ = "READ";

    static REQUEST_CATEGORY_ACTION = "ACTION";

    static FORMULA = "formula";

    static LOOKUP = "lookup";

    static ACCOUNTS = "accounts";

    static REFRESH_SINGLE_MODULE_FIELDS_ERROR = "Exception in refreshing fields of module : ";

    static REFRESH_ALL_MODULE_FIELDS_ERROR = "Exception in refreshing fields of all modules : ";

    static SKIP_MANDATORY = "skip-mandatory";

    static PRIMARY_KEY_ERROR = "Value missing or null for required key(s) : ";

    static PICKLIST = "picklist";

    static AUTO_REFRESH_FIELDS_ERROR_MESSAGE = "autoRefreshFields MUST NOT be null.";

    static SDK_UNINITIALIZATION_ERROR = "SDK UNINITIALIZED ERROR";

    static SDK_UNINITIALIZATION_MESSAGE = "SDK is UnInitialized";

    static USER_PROXY_ERROR = "USERPROXY ERROR";

    static HOST_ERROR_MESSAGE = "Host MUST NOT be null.";

    static PORT_ERROR_MESSAGE = "Port MUST NOT be null.";

    static SWITCH_USER_ERROR = "SWITCH USER ERROR";

    static PARAMETER_NULL_ERROR = "NULL PARAMETER ERROR";

    static HEADER_NULL_ERROR = "NULL HEADER ERROR";

    static PARAM_NAME_NULL_ERROR = "NULL PARAM NAME ERROR";

    static HEADER_NAME_NULL_ERROR = "NULL HEADER NAME ERROR";

    static PARAM_NAME_NULL_ERROR_MESSAGE = "Param Name MUST NOT be null";

    static HEADER_NAME_NULL_ERROR_MESSAGE = "Header Name MUST NOT be null";

    static NULL_VALUE_ERROR_MESSAGE = " MUST NOT be null";

    static PARAM_INSTANCE_NULL_ERROR = "Param Instance MUST NOT be null";

    static HEADER_INSTANCE_NULL_ERROR = "Header Instance MUST NOT be null";

    static PARAMETER_ERROR_MESSAGE = " MUST NOT be null";

    static UNSUPPORTED_IN_API = "API UNSUPPORTED OPERATION";

    static UNSUPPORTED_IN_API_MESSAGE = " Operation is not supported by API";

    static NULL_VALUE = "null";

    static PROXY_SETTINGS = "Proxy settings - ";

    static PROXY_HOST = "Host: ";

    static PROXY_PORT = "Port: ";

    static PROXY_USER = "User: ";

    static API_ERROR_RESPONSE = "Error response : ";

    static FILE_ERROR = "file_error";

    static FILE_DOES_NOT_EXISTS = "file does not exists";

    static CONSENT_LOOKUP = "consent_lookup";

    static USER_MAIL_NULL_ERROR = "USER MAIL NULL ERROR";

    static USER_MAIL_NULL_ERROR_MESSAGE = "User Mail MUST NOT be null. Use userMail setter to set value.";

    static MYSQL_TABLE_NAME = "oauthtoken";

    static GET_TOKEN_BY_ID_DB_ERROR = "Exception in getTokenById - DBStore : Given ID is invalid";

    static GET_TOKEN_BY_ID_FILE_ERROR = "Exception in getTokenById - FileStore : Given ID is invalid";

    static CLIENT_ID_NULL_ERROR_MESSAGE = "ClientID MUST NOT be null";

    static CLIENT_SECRET_NULL_ERROR_MESSAGE = "ClientSecret MUST NOT be null";

    static IS_GENERATE_REQUEST_BODY = ["PATCH", "POST", "PUT"];

    static USER_SIGNATURE_ERROR_MESSAGE = "UserSignature MUST NOT be null.";

    static ENVIRONMENT_ERROR_MESSAGE = "Environment MUST NOT be null.";

    static TOKEN_ERROR_MESSAGE = "Token MUST NOT be null.";

    static STORE_ERROR_MESSAGE = "Store MUST NOT be null.";

    static SDK_CONFIG_ERROR_MESSAGE = "sdkConfig MUST NOT be null.";

    static RESOURCE_PATH_INVALID_ERROR_MESSAGE = "Resource Path MUST be a valid directory.";

    static REQUEST_PROXY_ERROR = "REQUESTPROXY ERROR";

    static USER_SIGNATURE_ERROR = "USERSIGNATURE ERROR";

    static REGULAR_EXPRESSION = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    static GENERATED_TYPE = "generated_type";

    static GENERATED_TYPE_CUSTOM = "custom";

    static NO_ACCESS_TOKEN_ERROR = "ACCESS TOKEN IS NOT PRESENT IN RESPONSE";

    static INVALID_TOKEN_ERROR = "INVALID TOKEN ERROR";

    static SDK_MODULE_METADATA = "SDK-MODULE-METADATA";

    static NODEJS = "nodejs_";

    static LOGGER = "logger";

    static REQUEST_PROXY = "request_proxy";

    static COUNT = "count";

    static NUMBER_TYPE = "[object Number]";

    static OAUTH_MANDATORY_KEYS_1 = ["AuthenticationType"];

    static ACCESS_TOKEN_USING_REFRESH_TOKEN_MESSAGE = "Access token can be generated by refresh token";

    static ACCESS_TOKEN_USING_GRANT_TOKEN_MESSAGE = "Access token can be generated by grant token.";

    static LOCATION = "location";

    static HEADER = "header";

    static PARAM = "param";

    static GET_TOKEN_BY_USER_NAME_ERROR = "Exception in getToken() - OAuth2 : Given user_name token details not found, Please give required item";

    static OAUTH_MANDATORY_KEYS = [Constants.GRANT_TOKEN, Constants.REFRESH_TOKEN, Constants.ID, Constants.ACCESS_TOKEN, "userSignature", "AuthenticationType"];

    static OAUTH_MANDATORY_KEYS1 = [Constants.CLIENT_ID, Constants.CLIENT_SECRET];

    static OAUTH_MANDATORY_KEYS2 = [Constants.GRANT_TOKEN, Constants.REFRESH_TOKEN];

    static USER_SIGNATURE = "user_signature";

    static AUTHENTICATION_SCHEMA = "authentication_schema";

    static AUTHENTICATIONSCHEMA = "AuthenticationSchema";

    static USER_NAME = "user_name";

    static GENERATE_REQUEST_BODY = [Constants.REQUEST_METHOD_PATCH, Constants.REQUEST_METHOD_POST, Constants.REQUEST_METHOD_PUT];

    static REQUEST = "request";

    static RESPONSE = "response";

    static ALL = "ALL";

    static AUTHENTICAION = "auhtentication";

    static SDK_OPERATIONS_METHOD_DETAILS_NOT_FOUND_IN_JSON_DETAILS_FILE = "SDK Operations method details not found in JSON details file";

    static SDK_OPERATIONS_CLASS_DETAILS_NOT_FOUND_IN_JSON_DETAILS_FILE = "SDK Operations class details not found in JSON details file";

    static REQUEST_SUPPORTED = "request_supported";

    static EXTRA_DETAILS = "extra_details";

    static MEMBERS = "members";

    static GROUP_TYPE = "group_type";

    static ARRAY_OF = "array-of";

    static ONE_OF = "one-of";

    static TARRAY_TYPE = "com.zoho.api.spec.template.type.TArray";

    static TFILE_TYPE = "com.zoho.api.spec.template.type.TFile";

    static ALL_OF = "all-of";

    static SUB_TYPE = "sub_type";

    static SPEC_TYPE = "spec_type";

    static ORDERED_STRUCTURES = "ordered_structures";

    static GENERATE_TOKEN_ID_ERROR = "Exception in generateId() - DBStore";

    static GET_TOKEN_DB_ERROR1 = "Exception in DBStore : Given user authentication details not found.";

    static PARSE_RESPONSE = "Exception in parsing token response";

    static AUTHENTICATION = "authentication";

    static SCHEMA_NAME = "schema_name";

}

export {
    Constants as MasterModel,
    Constants as Constants
}