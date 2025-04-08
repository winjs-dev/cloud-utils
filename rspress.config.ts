import { defineConfig } from 'rspress/config';
import { pluginTypeDoc } from '@rspress/plugin-typedoc';
import path from 'path';

export default defineConfig({
  title: 'cloud-utils-rslib',
  description: 'cloud-utils-rslib API文档',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'API', link: '/api' },
    ],
    sidebar: {
      '/api/': [
        {
          text: '核心方法',
          items: [
            { text: 'accAdd', link: '/api/accAdd' },
          ],
        },
      ],
    },
  },
  plugins: [
    pluginTypeDoc({
      entryPoints: [
        path.join(__dirname, 'src', 'accAdd.ts'),
        path.join(__dirname, 'src', 'addChineseUnit.ts'),
        path.join(__dirname, 'src', 'combineURLs.ts'),
        path.join(__dirname, 'src', 'compareVersion.ts'),
        path.join(__dirname, 'src', 'dig.ts'),
        path.join(__dirname, 'src', 'dynamicLoadScript.ts'),
        path.join(__dirname, 'src', 'encrypt.ts'),
        path.join(__dirname, 'src', 'getDevice.ts'),
        path.join(__dirname, 'src', 'getDayOfYearWeek.ts'),
        path.join(__dirname, 'src', 'getDays.ts'),
        path.join(__dirname, 'src', 'getDiffDay.ts'),
        path.join(__dirname, 'src', 'getImgBase64.ts'),
        path.join(__dirname, 'src', 'getIn.ts'),
        path.join(__dirname, 'src', 'getPixelRatio.ts'),
        path.join(__dirname, 'src', 'handleEmoji.ts'),
        path.join(__dirname, 'src', 'hasClass.ts'),
        path.join(__dirname, 'src', 'hexToRgb.ts'),
        path.join(__dirname, 'src', 'htmlDecode.ts'),
        path.join(__dirname, 'src', 'htmlEncode.ts'),
        path.join(__dirname, 'src', 'invertKeyValues.ts'),
        path.join(__dirname, 'src', 'inWeibo.ts'),
        path.join(__dirname, 'src', 'inWeixin.ts'),
        path.join(__dirname, 'src', 'isCardId.ts'),
        path.join(__dirname, 'src', 'isChinese.ts'),
        path.join(__dirname, 'src', 'isNewEnergyLicenseNo.ts'),
        path.join(__dirname, 'src', 'isHTML.ts'),
        path.join(__dirname, 'src', 'isLeapYear.ts'),
        path.join(__dirname, 'src', 'isLicenseNo.ts'),
        path.join(__dirname, 'src', 'isLightOS.ts'),
        path.join(__dirname, 'src', 'isMobile.ts'),
        path.join(__dirname, 'src', 'isValidDate.ts'),
        path.join(__dirname, 'src', 'isValidEd2kLinkLoose.ts'),
        path.join(__dirname, 'src', 'isValidEmail.ts'),
        path.join(__dirname, 'src', 'isValidEnglishName.ts'),
        path.join(__dirname, 'src', 'isValidHexadecimalColor.ts'),
        path.join(__dirname, 'src', 'isValidIPV4.ts'),
        path.join(__dirname, 'src', 'isValidIPV6.ts'),
        path.join(__dirname, 'src', 'isValidImageLink.ts'),
        path.join(__dirname, 'src', 'isValidMD5.ts'),
        path.join(__dirname, 'src', 'isValidMagnetLinkLoose.ts'),
        path.join(__dirname, 'src', 'isValidPassport.ts'),
        path.join(__dirname, 'src', 'isValidPassword.ts'),
        path.join(__dirname, 'src', 'isValidQQ.ts'),
        path.join(__dirname, 'src', 'isValidSemverVersion.ts'),
        path.join(__dirname, 'src', 'isValidSubnetMask.ts'),
        path.join(__dirname, 'src', 'isValidWechatID.ts'),
        path.join(__dirname, 'src', 'isValidZipcode.ts'),
        path.join(__dirname, 'src', 'objectFromPairs.ts'),
        path.join(__dirname, 'src', 'objectToPairs.ts'),
        path.join(__dirname, 'src', 'is.ts'),
        path.join(__dirname, 'src', 'isEmpty.ts'),
        path.join(__dirname, 'src', 'isEmptyObject.ts'),
        path.join(__dirname, 'src', 'size.ts'),
        path.join(__dirname, 'src', 'isDigit.ts'),
        path.join(__dirname, 'src', 'isLetters.ts'),
        path.join(__dirname, 'src', 'isEmoji.ts'),
        path.join(__dirname, 'src', 'equals.ts'),
        path.join(__dirname, 'src', 'exportXls.ts'),
        path.join(__dirname, 'src', 'extend.ts'),
        path.join(__dirname, 'src', 'getLocationHrefParam.ts'),
        path.join(__dirname, 'src', 'getLocationSearchParam.ts'),
        path.join(__dirname, 'src', 'getMonthOfDay.ts'),
        path.join(__dirname, 'src', 'getMonths.ts'),
        path.join(__dirname, 'src', 'getPixelRatio.ts'),
        path.join(__dirname, 'src', 'handleEmoji.ts'),
        path.join(__dirname, 'src', 'hasClass.ts'),
        path.join(__dirname, 'src', 'hexToRgb.ts'),
        path.join(__dirname, 'src', 'htmlDecode.ts'),
        path.join(__dirname, 'src', 'htmlEncode.ts'),
        path.join(__dirname, 'src', 'invertKeyValues.ts'),
        path.join(__dirname, 'src', 'inWeibo.ts'),
        path.join(__dirname, 'src', 'inWeixin.ts'),
        path.join(__dirname, 'src', 'isCardId.ts'),
        path.join(__dirname, 'src', 'isChinese.ts'),
        path.join(__dirname, 'src', 'isNewEnergyLicenseNo.ts'),
        path.join(__dirname, 'src', 'isHTML.ts'),
        path.join(__dirname, 'src', 'isLeapYear.ts'),
        path.join(__dirname, 'src', 'isLicenseNo.ts'),
        path.join(__dirname, 'src', 'isLightOS.ts'),
        path.join(__dirname, 'src', 'isMobile.ts'),
        path.join(__dirname, 'src', 'isValidDate.ts'),
        path.join(__dirname, 'src', 'isValidEd2kLinkLoose.ts'),
        path.join(__dirname, 'src', 'isValidEmail.ts'),
        path.join(__dirname, 'src', 'isValidEnglishName.ts'),
        path.join(__dirname, 'src', 'isValidHexadecimalColor.ts'),
        path.join(__dirname, 'src', 'isValidIPV4.ts'),
        path.join(__dirname, 'src', 'isValidIPV6.ts'),
        path.join(__dirname, 'src', 'isValidImageLink.ts'),
        path.join(__dirname, 'src', 'isValidMD5.ts'),
        path.join(__dirname, 'src', 'isValidMagnetLinkLoose.ts'),
        path.join(__dirname, 'src', 'isValidPassport.ts'),
        path.join(__dirname, 'src', 'isValidPassword.ts'),
        path.join(__dirname, 'src', 'isValidQQ.ts'),
        path.join(__dirname, 'src', 'isValidSemverVersion.ts'),
        path.join(__dirname, 'src', 'isValidSubnetMask.ts'),
        path.join(__dirname, 'src', 'isValidWechatID.ts'),
        path.join(__dirname, 'src', 'isValidZipcode.ts'),
        path.join(__dirname, 'src', 'objectFromPairs.ts'),
        path.join(__dirname, 'src', 'objectToPairs.ts'),
      ],
    }),
  ],
});
