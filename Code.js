/**
 * 개별 학생 시간표 생성
 * A열: 학생 이름
 * B열: 시간
 */
function createStudentSchedule() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getActiveSheet();
  const data = sheet.getDataRange().getValues();

  // 헤더 제외하고 데이터 가져오기
  const students = [];
  for (let i = 1; i < data.length; i++) {
    const name = data[i][0];
    const time = data[i][1];
    if (name && time) {
      students.push({ name: name, time: time });
    }
  }

  // 학생별로 그룹화
  const scheduleByStudent = {};
  students.forEach(function(student) {
    if (!scheduleByStudent[student.name]) {
      scheduleByStudent[student.name] = [];
    }
    scheduleByStudent[student.name].push(student.time);
  });

  // 새 시트에 개별 시간표 생성
  let outputSheet = ss.getSheetByName('개별시간표');
  if (outputSheet) {
    outputSheet.clear();
  } else {
    outputSheet = ss.insertSheet('개별시간표');
  }

  let row = 1;
  for (const studentName in scheduleByStudent) {
    // 학생 이름 헤더
    outputSheet.getRange(row, 1).setValue(studentName).setFontWeight('bold');
    row++;

    // 시간 목록
    const times = scheduleByStudent[studentName];
    times.sort();
    times.forEach(function(time) {
      outputSheet.getRange(row, 1).setValue(time);
      row++;
    });

    row++; // 학생 간 빈 줄
  }

  // 열 너비 자동 조정
  outputSheet.autoResizeColumn(1);

  SpreadsheetApp.getUi().alert('개별 학생 시간표가 생성되었습니다!');
}

/**
 * 메뉴 추가
 */
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('시간표')
    .addItem('개별 학생 시간표 생성', 'createStudentSchedule')
    .addToUi();
}
