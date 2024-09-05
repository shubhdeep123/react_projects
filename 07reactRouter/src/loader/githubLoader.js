const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/shubhdeep123")
    return response.json();
}

export default githubInfoLoader;