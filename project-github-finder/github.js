class GitHub {
  constructor() {
    this.client_id = '1f51ef08f0d2f9db17c0';
    this.client_secret = 'f68a4cf54a960c33141416452d05a30a1e97d0ce';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    console.log(repos);

    return {
      profile,
      repos,
    };
  }
}
