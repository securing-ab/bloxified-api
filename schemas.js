class UserSchema {
    constructor(avatarUrl = "https://i.redd.it/9n242vp9u7r31.png", about = "", displayName = "", username, id, subscribers = 0, myVideos = [], recentlyWatched = [], isDev = false, isPremium = false) {
        this.avatarUrl = avatarUrl;
        this.about = about;
        this.displayName = displayName;
        this.username = username;
        this.id = id;
        this.subscribers = subscribers;
        this.myVideos = myVideos;
        this.recentlyWatched = recentlyWatched;
        this.isDev = isDev;
        this.isPremium = isPremium;

        return {
          avatarUrl: this.avatarUrl,
          about: this.about,
          displayName: this.displayName,
          username: this.username,
          id: this.id,
          subscribers: this.subscribers,
          myVideos: this.myVideos,
          recentlyWatched: this.recentlyWatched,
          isDev: this.isDev,
          isPremium: this.isPremium
        };
    }
}

class BotSchema {
    constructor(avatarUrl = "https://i.redd.it/9n242vp9u7r31.png", about = "", displayName = "", username, id) {
        this.avatarUrl = avatarUrl;
        this.about = about;
        this.displayName = displayName;
        this.username = username;
        this.id = id;

        return {
          avatarUrl: this.avatarUrl,
          about: this.about,
          displayName: this.displayName,
          username: this.username,
          id: this.id
        };
    }
}

class MessageSchema {
    constructor(text, createdAt, user, uid) {
        this.text = text;
        this.createdAt = createdAt;
        this.user = user;
        this.uid = uid;
        return {
            text: this.text,
            createdAt: this.createdAt,
            user: this.user,
            uid: this.uid
        };
    }
}

class VideoSchema {
  constructor(channel, id, description, url, views = 0, song) {
      this.channel = channel;
      this.id = id;
      this.description = description;
      this.url = url;
      this.views = views;
      this.song = song;

      return {
          channel: this.channel,
          id: this.id,
          description: this.description,
          url: this.url,
          views: this.views,
          song: this.song
      };
  }
}

module.exports = { UserSchema, BotSchema, MessageSchema, VideoSchema };