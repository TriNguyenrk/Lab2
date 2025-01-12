const oldData = [
    { code: 'ab', name: 'Son môi' },
    { code: 'ac', name: 'Sữa rửa mặt' },
    { code: null, name: null },
    { code: null, name: '' },
  ];
  const newData ={
    ab: {code: 'ab', name: 'Son môi'},
    ac: {code: 'ac', name: 'Sữa rửa mặt'},
  };
  
  // Hàm chuyển từ mảng sang object
  const parseArrayToObject = ({ array = [], keyId = '' }) =>
    Object.fromEntries(
      array
        .filter(item => item && item[keyId]) // Lọc bỏ item không có keyId
        .map(item => [item[keyId], item])   // Tạo cặp [key, value]
    );
  
  // Hàm lọc object để loại bỏ phần tử không hợp lệ
  const filterObject = (obj) => {
    Object.keys(obj).forEach(key => {
      const value = obj[key];
      // Loại bỏ nếu không có `code`, `name`, hoặc `name` là chuỗi rỗng
      if (!value || !value.code || !value.name || value.name.trim() === '') {
        delete obj[key];
      }
    });
    return obj;
  };
  
  // Kết quả
  console.log(newData); // In ra object đã lọc
  console.log(newData['ab']); // Thông tin sản phẩm mã "ab"
  