const class1 = [
    {
      mssv: 'PS0000',
      name: 'Nguyen Van A',
      avgPoint: 8.9,
      avgTraningPoint: 7,
      status: 'pass',
    },
    {
      mssv: 'PS0001',
      name: 'Nguyen Van B',
      avgPoint: 4.9,
      avgTraningPoint: 10,
      status: 'pass',
    }
  ];
  
  const class2 = [
    {
      mssv: 'PS0002',
      name: 'Nguyen Van C',
      avgPoint: 4.9,
      avgTraningPoint: 10,
      status: 'failed',
    },
    {
      mssv: 'PS0003',
      name: 'Nguyen Van D',
      avgPoint: 10,
      avgTraningPoint: 10,
      status: 'pass',
    },
    {
      mssv: 'PS0004',
      name: 'Nguyen Van E',
      avgPoint: 10,
      avgTraningPoint: 2,
      status: 'pass',
    }
  ];
  
  // 1. Gộp danh sách và lọc sinh viên có status là 'pass'
  const allStudents = [...class1, ...class2];
  const passedStudents = allStudents.filter(student => student.status === 'pass');
  
  // 2. Sắp xếp danh sách theo avgPoint từ cao xuống thấp
  const sortedByAvgPoint = [...allStudents].sort((a, b) => b.avgPoint - a.avgPoint);
  
  // 3. Sắp xếp danh sách theo avgTraningPoint từ cao xuống thấp
  const sortedByTrainingPoint = [...allStudents].sort((a, b) => b.avgTraningPoint - a.avgTraningPoint);
  
  // 4. Lấy thông tin sinh viên "Ong vàng" (điểm trung bình cao nhất)
  const topStudent = sortedByAvgPoint[0];
  
  // 5. Xuất kết quả
  console.log("Danh sách sinh viên theo điểm trung bình (từ cao xuống thấp):", sortedByAvgPoint);
  console.log("Danh sách sinh viên theo điểm rèn luyện (từ cao xuống thấp):", sortedByTrainingPoint);
  console.log("Thông tin sinh viên Ong vàng:", topStudent);
  