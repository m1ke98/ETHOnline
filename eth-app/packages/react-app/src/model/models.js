
export class User {
    accountId = "";
    constructor(id) {
        this.accountId = id;
    }
};

export class SessionData {
    user = null;
    nftStorageURI = '';
    isUserLoggedIn = false;
};