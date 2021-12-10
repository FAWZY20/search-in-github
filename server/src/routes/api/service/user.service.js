const axios = require("axios");


export const getAllUserData = async (username) => {
  const user = await fetchUser(username);
  const repos = await fetchRepos(username);
  const followers = await fetchFollowers(username);
  return { user, repos, followers };
};

export const fetchUser = async (username) => {
  const { data: user } = await axios.get(
    `https://api.github.com/users/${username}`,
    {
      validateStatus: (status) => status === 200,
      headers: {
        Authorization: "Bearer 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"
      },
      responseType: "json",
    }
  );
  return user;
};

export const fetchRepos = async (username) => {
  const { data: repos } = await axios.get(
    `https://api.github.com/users/${username}/repos`,
    {
      validateStatus: (status) => status === 200,
      headers: {
        Authorization: "Bearer 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"
      },
      responseType: "json",
    }
  );
  return repos;
};

export const fetchFollowers = async (username) => {
  const { data: followers } = await axios.get(
    `https://api.github.com/users/${username}/followers`,
    {
      validateStatus: (status) => status === 200,
      headers: {
        Authorization: "Bearer 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"
      },
      responseType: "json",
    }
  );
  return followers;
};