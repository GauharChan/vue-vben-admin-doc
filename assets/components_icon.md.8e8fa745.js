import{_ as n,f as s,e as a,N as t}from"./plugin-vue_export-helper.147b70e9.js";const h='{"title":"icon \u56FE\u6807\u7EC4\u4EF6","description":"","frontmatter":{},"headers":[{"level":2,"title":"Icon","slug":"icon"},{"level":3,"title":"Usage","slug":"usage"},{"level":3,"title":"Props","slug":"props"},{"level":2,"title":"SvgIcon","slug":"svgicon"},{"level":3,"title":"Usage","slug":"usage-1"},{"level":3,"title":"Props","slug":"props-1"},{"level":2,"title":"IconPicker","slug":"iconpicker"},{"level":3,"title":"Usage","slug":"usage-2"},{"level":3,"title":"Props","slug":"props-2"}],"relativePath":"components/icon.md","lastUpdated":1674731559016}',p={},o=t(`<h1 id="icon-\u56FE\u6807\u7EC4\u4EF6"><a class="header-anchor" href="#icon-\u56FE\u6807\u7EC4\u4EF6" aria-hidden="true">#</a> icon \u56FE\u6807\u7EC4\u4EF6</h1><h2 id="icon"><a class="header-anchor" href="#icon" aria-hidden="true">#</a> Icon</h2><p>\u7528\u4E8E\u9879\u76EE\u5185\u7EC4\u4EF6\u7684\u5C55\u793A\uFF0C\u57FA\u672C\u652F\u6301\u6240\u6709\u56FE\u6807\u5E93\uFF08\u652F\u6301\u6309\u9700\u52A0\u8F7D\uFF0C\u53EA\u6253\u5305\u6240\u7528\u5230\u7684\u56FE\u6807\uFF09</p><p>icon \u7EC4\u4EF6\u4F4D\u4E8E <a href="https://github.com/vbenjs/vue-vben-admin/tree/main/src/components/Icon" target="_blank" rel="noopener noreferrer">src/components/Icon</a> \u5185</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>icon \u7684\u503C\u53EF\u4EE5\u5728 <a href="https://iconify.design" target="_blank" rel="noopener noreferrer">Iconify</a> \u6216 <a href="https://icones.netlify.app/collection/ant-design" target="_blank" rel="noopener noreferrer">Netlify</a> \u4E0A\u67E5\u8BE2</p></div><h3 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h3><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>gg:loadbar-doc<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Icon</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Icon&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> Icon <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="props"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h3><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>icon</td><td><code>string</code></td><td>-</td><td>\u56FE\u6807\u540D</td></tr><tr><td>color</td><td><code>string</code></td><td>-</td><td>\u56FE\u6807\u989C\u8272</td></tr><tr><td>size</td><td><code>number</code></td><td>16</td><td>\u56FE\u6807\u5927\u5C0F</td></tr><tr><td>prefix</td><td><code>string</code></td><td>-</td><td>\u56FE\u6807\u524D\u7F00</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">\u63D0\u793A</p><p>\u5982\u679C <code>icon</code> \u503C\u4EE5 <code>|svg</code> \u7ED3\u5C3E\uFF0C\u5219\u4F1A\u6E32\u67D3\u6210 <a href="#SvgIcon">SvgIcon \u7EC4\u4EF6</a></p></div><h2 id="svgicon"><a class="header-anchor" href="#svgicon" aria-hidden="true">#</a> SvgIcon</h2><p>\u7528\u4E8E\u4F7F\u7528\u9879\u76EE svg \u96EA\u78A7\u56FE</p><h3 id="usage-1"><a class="header-anchor" href="#usage-1" aria-hidden="true">#</a> Usage</h3><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SvgIcon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>test<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SvgIcon</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> SvgIcon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Icon&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> SvgIcon <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="props-1"><a class="header-anchor" href="#props-1" aria-hidden="true">#</a> Props</h3><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>name</td><td><code>string</code></td><td>-</td><td>svg \u56FE\u6807\u540D</td></tr><tr><td>size</td><td><code>number</code></td><td>16</td><td>\u56FE\u6807\u5927\u5C0F</td></tr></tbody></table><h2 id="iconpicker"><a class="header-anchor" href="#iconpicker" aria-hidden="true">#</a> IconPicker</h2><p>\u672C\u7EC4\u4EF6\u8BE6\u7EC6\u8BF4\u660E\u8BF7\u53C2\u9605<a href="./../dep/icon.html#\u56FE\u6807\u9009\u62E9\u5668">\u56FE\u6807\u9009\u62E9\u5668</a></p><h3 id="usage-2"><a class="header-anchor" href="#usage-2" aria-hidden="true">#</a> Usage</h3><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>IconPicker</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> IconPicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Icon&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> IconPicker <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="props-2"><a class="header-anchor" href="#props-2" aria-hidden="true">#</a> Props</h3><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>width</td><td><code>string</code></td><td>100%</td><td>\u5BBD\u5EA6</td></tr><tr><td>pageSize</td><td><code>number</code></td><td>140</td><td>\u6BCF\u9875\u663E\u793A\u7684\u56FE\u6807\u6570</td></tr><tr><td>copy</td><td><code>boolean</code></td><td>false</td><td>\u662F\u5426\u53EF\u4EE5\u590D\u5236</td></tr><tr><td>mode</td><td><code>string</code></td><td><code>iconify</code></td><td>\u5907\u9009\u56FE\u6807\u6C60\uFF0C\u4E3A svg \u65F6\uFF0C\u4F1A\u8BFB\u53D6\u6240\u6709 svg sprite \u56FE\u6807\u3002\u8BE6\u89C1\u4E0B\u65B9\u8BF4\u660E</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">mode \u8BF4\u660E</p><ul><li><code>mode</code>\u4E3A<code>iconify</code>\u65F6\uFF0C\u4F1A\u4F7F\u7528\u9884\u751F\u6210\u7684<a href="./../dep/icon.html#\u56FE\u6807\u96C6\u9884\u751F\u6210">\u56FE\u6807\u96C6\u6570\u636E</a>\u4F5C\u4E3A\u5907\u9009\u56FE\u6807\u6C60</li><li><code>mode</code>\u4E3A<code>svg</code>\u65F6\uFF0C\u4F1A\u4F7F\u7528 <code>/src/assets/icons</code> \u4E0B\u7684\u6240\u6709svg\u56FE\u6807\uFF08\u53EF\u5305\u542B\u4E00\u7EA7\u5B50\u76EE\u5F55\uFF09\u4F5C\u4E3A\u5907\u9009\u56FE\u6807\u6C60\uFF0C\u8BE6\u89C1<a href="https://github.com/vbenjs/vite-plugin-svg-icons/blob/main/README.zh_CN.md#vite-plugin-svg-icons" target="_blank" rel="noopener noreferrer">vite-plugin-svg-icons</a>\u3002</li></ul></div>`,23),e=[o];function c(l,i,u,r,d,k){return a(),s("div",null,e)}var v=n(p,[["render",c]]);export{h as __pageData,v as default};
