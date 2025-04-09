/**
 * 导出Excel文件
 * @description 将Blob数据导出为Excel文件，支持IE和其他现代浏览器
 * @param {Blob} data - 接口返回的blob数据
 * @param {string} [name='excel'] - 导出的文件名(不带扩展名)
 * @param {(result: ExportResult) => void} [callBack] - 导出结果回调函数
 * @returns {boolean} 如果数据为空返回false，否则返回true
 * @throws {TypeError} 当data参数不是Blob类型时抛出
 * @example
 * exportXls(blobData, 'report', (result) => {
 *   if (result.type === 'success') {
 *     console.log('导出成功');
 *   } else {
 *     console.log(`导出失败: ${result.msg}`);
 *   }
 * });
 */
export function exportXls(
  data: Blob,
  name: string = 'excel',
  callBack?: (result: ExportResult) => void
): boolean {
  if (!(data instanceof Blob)) {
    throw new TypeError('data参数必须是Blob类型');
  }

  if (!data || data.size === 0) {
    callBack?.({type: 'fail', msg: '数据为空'});
    return false;
  }

  const reader = new FileReader();
  reader.readAsText(data, 'utf-8');

  reader.onload = () => {
    try {
      const result = JSON.parse(reader.result as string) as {code?: number; msg?: string};
      if (result.code && result.code !== 200) {
        callBack?.({type: 'fail', code: result.code, msg: result.msg});
      } else {
        _downFile(data, name);
        callBack?.({type: 'success'});
      }
    } catch {
      _downFile(data, name);
      callBack?.({type: 'success'});
    }
  };

  reader.onerror = () => {
    callBack?.({type: 'fail', msg: '文件读取失败'});
  };

  return true;
}

/**
 * 导出结果类型
 */
type ExportResult =
  | {type: 'success'}
  | {type: 'fail'; code?: number; msg?: string};

/**
 * 下载文件内部方法
 * @private
 * @param {Blob} data - 文件数据
 * @param {string} fileName - 文件名(不带扩展名)
 */
function _downFile(data: Blob, fileName: string): void {
  const blob = new Blob([data], {type: 'application/vnd.ms-excel;charset=UTF-8'});

  if ('msSaveOrOpenBlob' in navigator) {
    (navigator as any).msSaveBlob(blob, `${fileName}.xlsx`);
  } else {
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${fileName}.xlsx`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
  }
}
