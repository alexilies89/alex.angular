var User = (function () {
    function User(username, password) {
        this.username = username;
        this.password = password;
    }
    User.prototype.getUsername = function () {
        return this.username;
    };

    User.prototype.getPassword = function () {
        return this.password;
    };

    User.prototype.toString = function () {
        return this.username + " " + this.password;
    };
    return User;
})();

var Post = (function () {
    function Post(title, content, user) {
        this.title = title;
        this.content = content;
        this.user = user;
    }
    return Post;
})();
