const firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('First promise resolved');
    }, 2000);
  });
  
  const secondPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Error: Second promise failed');
    }, 2000);
  });
  
  const getList = async () => {
    try {
      await fetch('https://64d8a86c5f9bf5b879ce6dd9.mockapi.io/api/v1/moviesNow');
      return 'API call successful';
    } catch (error) {
      throw new Error('Failed to fetch API');
    }
  };  
  
  // Sử dụng Promise.all để dừng khi gặp lỗi
  Promise.all([firstPromise, secondPromise, getList()])
    .then((results) => {
      console.log('All promises resolved:', results);
    })
    .catch((error) => {
      console.error('Promise failed:', error);
    });
// Sử dụng Promise.allSettled để xử lý tất cả promise
Promise.allSettled([firstPromise, secondPromise, getList()])
  .then((results) => {
    results.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        console.log(`Promise ${index + 1} fulfilled:`, result.value);
      } else {
        console.error(`Promise ${index + 1} rejected:`, result.reason);
      }
    });
    console.log('All promises completed');
  })
  .catch((error) => {
    console.error('Unexpected error:', error);
  })
  .finally(() => {
    console.log('Execution finished');
  });
