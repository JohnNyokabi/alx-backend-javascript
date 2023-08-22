import fs from 'fs/promises';

const readDatabase = async (filePath) => {
  try {
    const data = await fs.readFile(filePath, 'utf8');
      console.log(data);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

export { readDatabase };
