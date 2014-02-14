class User {
    username: string;
    password: string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }

    getUsername() {
        return this.username;
    }

    getPassword() {
        return this.password;
    }

    toString() {
        return this.username + " " + this.password;
    }
} 

class Post {
    title: string;
    content: string;
    user: User;

    constructor(title: string, content: string, user: User) {
        this.title = title;
        this.content = content;
        this.user = user;
    }
}