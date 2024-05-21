# DTU Times - Official Website

## How to run using Docker?

1. Install Docker Desktop (or Podman if you want to use open source 💫)
1. Clone this repo, [make sure to use correct branch](https://www.freecodecamp.org/news/git-clone-branch-how-to-clone-a-specific-branch/)

    ```bash
    git clone --depth 50 --single-branch --branch=new-API https://github.com/dtutimes/Main_website.git
    ```

1. Change directory to this repo

   ```bash
   cd Main_website
   ```

1. Build this Docker image

   ```bash
   docker build . --tag dtutimes
   ```

1. Run on port 5173

   ```bash
    docker run -p5173:3000 -i -t dtutimes:latest
    ```

1. Navigate to [http://localhost:5173](http://localhost:5173)
