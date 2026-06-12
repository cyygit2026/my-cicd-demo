const { test, expect } = require('@playwright/test');
const path = require('path');

test('验证页面标题和内容是否正确', async ({ page }) => {
  // 在虚拟浏览器中打开本地的 index.html 页面
  const filePath = `file://${path.resolve(__dirname, '../index.html')}`;
  await page.goto(filePath);

  // 获取页面中的 h1 标签
  const title = page.locator('#title');
  
  // 断言（验证）：标题内容是否等于我们预期的话
  await expect(title).toHaveText('欢迎来到自动化部署测试页面！');
});