class MyFile {
  constructor(name, type, content = '') {
    this.name = name;
    this.type = type; // 添加 type 属性
    this.content = content;
  }
}

class Directory {
  constructor(name) {
    this.name = name;
    this.type = 'directory'; // 文件夹类型为 directory
    this.files = [];
  }

  addFile(file) {
    this.files.push(file);
  }
}

class FileSystem {
  constructor() {
    this.rootDir = new Directory('/');
    this.currentDir = this.rootDir;
  }

  cd(dirName) {
    if (dirName === '..') {
      this.currentDir = this.currentDir.parent;
    } else {
      const dir = this.currentDir.files.find((file) => file.name === dirName && file.type === 'directory');
      if (dir) {
        this.currentDir = dir;
      } else {
        throw new Error(`Directory ${dirName} not found`);
      }
    }
  }

  getFile(path) {
    const parts = path.split('/');
    let currentDir = this.currentDir;
    for (const part of parts) {
      if (part === '') {
        currentDir = this.rootDir;
        continue;
      }
      const file = currentDir.files.find((file) => file.name === part);
      if (!file) {
        throw new Error(`File ${path} not found`);
      }
      if (file.type === 'directory') {
        currentDir = file;
      } else {
        return file;
      }
    }
    throw new Error(`File ${path} not found`);
  }

    /*
  readFile(path) {
    const file = this.getFile(path);
    if (file.type !== 'text') {
      throw new Error(`${path} is not a text file.`);
    }
    return file.content;
  }

  writeFile(path, content) {
    const file = this.getFile(path);
    if (file.type !== 'text') {
      throw new Error(`${path} is not a text file.`);
    }
    file.content = content;
  }
  */

  createFile(fileName, fileType, content = '') {
    const file = new MyFile(fileName, fileType, content);
    this.currentDir.addFile(file);
  }

  createDirectory(dirName) {
    const dir = new Directory(dirName);
    dir.parent = this.currentDir;
    this.currentDir.addFile(dir);
  }

  listFiles() {
    return this.currentDir.files.map((file) => file.name);
  }

  listFilesJson() {
    const files = this.currentDir.files;
    const result = [];
    for (const file of files) {
      result.push({ name: file.name, type: file.type });
    }
    return result;
  }

  rename(oldPath, newPath) {
  const file = this.getFile(oldPath);
  const newPathFile = this.currentDir.files.find((file) => file.name === newPath);
  
  if (newPathFile) {
    throw new Error(`${newPath} already exists.`);
  }

  if (oldPath === newPath) {
    return;
  }

  file.name = newPath;
}


}
