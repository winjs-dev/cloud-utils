/**
 * 导出Excel文件
 * @param {Blob} data - 接口返回的blob数据
 * @param {string} [name='excel'] - excel文件名
 * @param {(result: {type: 'success'} | {type: 'fail'; code?: number; msg?: string}) => void} [callBack] - 导出成功/失败回调
 * @returns {boolean} 如果数据为空返回false，否则无返回值
 * @example
 * exportXls(blobData, 'report', (result) => {
 *   if (result.type === 'success') {
 *     console.log('导出成功');
 *   } else {
 *     console.log(`导出失败: ${result.msg}`);
 *   }
 * });
 */
export function exportXls(data: Blob, name: string = 'excel', callBack?: (result: {type: 'success'} | {type: 'fail'; code?: number; msg?: string}) => void): boolean {
  if (!data || data.size === 0) {
    callBack?.({type: 'fail', msg: '数据为空'});
    return false;
  }
  
  const reader = new FileReader();
  reader.readAsText(data, 'utf-8');
  
  reader.onload = (e) => {
    try {
      const {code, msg} = JSON.parse(reader.result as string);
      if (code && code !== 200) {
        callBack?.({type: 'fail', code, msg});
      } else {
        _downFile(data, name);
        callBack?.({type: 'success'});
      }
    } catch (error) {
      _downFile(data, name);
      callBack?.({type: 'success'});
    }
  };
  
  return true;
}

function _downFile(data: Blob, fileName: string): void {
  const blob = new Blob([data], {type: 'application/vnd.ms-excel,charset=UTF-8'});
  if (window.navigator.msSaveOrOpenBlob) {
    navigator.msSaveBlob(blob, fileName + '.xlsx');
  } else {
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = fileName + '.xlsx';
    link.click();
    window.URL.revokeObjectURL(link.href);
  }
}