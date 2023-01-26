import{_ as t,f as a,e as n,N as s}from"./plugin-vue_export-helper.147b70e9.js";const g='{"title":"CollapseContainer","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Props","slug":"props"},{"level":2,"title":"Slots","slug":"slots"}],"relativePath":"components/collapse-container.md","lastUpdated":1674731559016}',e={},p=s(`__VP_STATIC_START__<h1 id="collapsecontainer"><a class="header-anchor" href="#collapsecontainer" aria-hidden="true">#</a> CollapseContainer</h1><p>\u533A\u57DF\u6298\u53E0\u5361\u7247\u5BB9\u5668</p><h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CollapseContainer</span><span class="token punctuation">&gt;</span></span> content <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CollapseContainer</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> CollapseContainer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Container/index&#39;</span><span class="token punctuation">;</span>

  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      CollapseContainer<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="props"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u53EF\u9009\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>title</td><td><code>string</code></td><td>-</td><td>-</td><td>\u6807\u9898</td></tr><tr><td>canExpan</td><td><code>boolean</code></td><td>true</td><td>-</td><td>\u662F\u5426\u53EF\u4EE5\u5C55\u5F00\uFF0C\u4E3A<code>true</code>\u663E\u793A\u6298\u53E0\u6309\u94AE</td></tr><tr><td>helpMessage</td><td><code>string[],string</code></td><td>-</td><td>-</td><td>\u6807\u9898\u53F3\u4FA7\u6E29\u99A8\u63D0\u9192</td></tr><tr><td>triggerWindowResize</td><td><code>boolean</code></td><td>false</td><td>-</td><td>\u5C55\u5F00\u6536\u7F29\u7684\u65F6\u5019\u662F\u5426\u89E6\u53D1 window.resize</td></tr><tr><td>loading</td><td><code>boolean</code></td><td>false</td><td>-</td><td>\u663E\u793A\u52A0\u8F7D\u9AA8\u67B6\u5C4F</td></tr><tr><td>lazyTime</td><td><code>number</code></td><td>0</td><td>-</td><td>\u5EF6\u8FDF\u52A0\u8F7D\u65F6\u95F4</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots" aria-hidden="true">#</a> Slots</h2><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>title</td><td>\u81EA\u5B9A\u4E49\u6807\u9898</td></tr><tr><td>action</td><td>\u81EA\u5B9A\u4E49\u53F3\u4FA7\u64CD\u4F5C\u6309\u94AE</td></tr><tr><td>default</td><td>\u9ED8\u8BA4\u533A\u57DF</td></tr><tr><td>footer</td><td>\u81EA\u5B9A\u4E49\u5E95\u90E8\u533A\u57DF</td></tr></tbody></table>__VP_STATIC_END__`,8),o=[p];function c(l,d,r,i,u,k){return n(),a("div",null,o)}var _=t(e,[["render",c]]);export{g as __pageData,_ as default};
