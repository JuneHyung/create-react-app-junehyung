#! /usr/bin/env node
const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");
const chalk = require("chalk");
const semver = require("semver");
const { removeSync, copySync } = require("fs-extra");


// project-name 미입력
if (process.argv.length < 3) {
  console.error(chalk.red(`[ERROR]: project name is empty! Enter as in the example below.`));
  console.log("ex) npx create-react-app-junehyung [project-name]");
  process.exit(1);
}

const projectName = process.argv[2];
const currentPath = process.cwd();
const isCurrentPathProject = projectName === ".";

const tempPath = path.join(currentPath, "temp");
const projectPath = isCurrentPathProject ? currentPath : path.join(currentPath, projectName);

const GIT_REPO = "https://github.com/JuneHyung/create-react-app-junehyung.git";

// Node Version Check
const requiredVersion = ">=20.0.0";
const currentVersion = process.version
const requireVersion = requiredVersion;
if (semver.satisfies(currentVersion, requireVersion)) {
  console.log(chalk.green("This is the version of Node that can be installed."));  
} else {
  console.error(chalk.red(`Node version must be 20 or higher.`));
  process.exit(1);
}

// project-name 입력시
if (!isCurrentPathProject) {
  try {
    fs.mkdirSync(projectPath);
  } catch (err) {
    if (err.code === "EEXIST") {
      // 이미 해당 경로 존재
      console.error(chalk.red(`[ERROR]: The file ${projectName} already exist in the current directory.`));
    } else {
      console.log(error);
    }
    process.exit(1);
  }
}

async function generator() {
  try {
    // git clone
    console.log("[INFO]: Downloading create-react-app-junehyung...");
    execSync(`git clone ${GIT_REPO} ${tempPath}`, { stdio: "inherit" });

    // 임시 폴더에서 react-boilerplate만 복사
    console.log("[INFO]: Copying files...");
    copySync(`${tempPath}/react-boilerplate`, projectPath);

    // 임시 폴더 삭제
    removeSync(tempPath);

    // 현재 경로 이동
    console.log("[INFO]: Moving into directory...");
    if (!isCurrentPathProject) {
      process.chdir(projectPath);
    }

    // 의존성 설치
    console.log("[INFO]: install dependencies...");
    execSync("npm install", { stdio: "inherit" });

    // SUCCESS !
    console.log("[SUCCESS]: Success to create-react-app-junehyung. Available now !");
  } catch (error) {
    console.error("[ERROR]: An error occurred during the process:", error.message);
  }
}

generator();
