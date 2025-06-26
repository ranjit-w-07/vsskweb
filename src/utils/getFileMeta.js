// src/utils/getFileMeta.js

export const getFileMeta = async (url) => {
  try {
    const response = await fetch(url);

    // ✅ Show console warning if file not found
    if (!response.ok) {
      throw new Error(`Fetch failed: ${response.status} ${response.statusText}`);
    }

    const blob = await response.blob();
    const sizeInMB = (blob.size / (1024 * 1024)).toFixed(2);
    const lastModified = new Date().toLocaleDateString('mr-IN'); // Marathi format

    return {
      fileSize: `${sizeInMB} MB`,
      date: lastModified,
    };
  } catch (error) {
    console.error('❌ File metadata fetch error:', error);
    return {
      fileSize: 'N/A',
      date: 'N/A',
    };
  }
};
