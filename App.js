import React from 'react';
import { ScrollView } from 'react-native';
import HTML from 'react-native-render-html';
import TableRenderer, { tableModel } from '@native-html/table-plugin';
import WebView from 'react-native-webview';

const html = `
<h3>TestTest Test:</h3>
<table style="border-collapse: collapse; width: 100%;" border="1">
<tbody>
<tr>
<td style="width: 100%;">
<p><strong>TestTest </strong>3 x Test 1,2-1,5 Mio IE p.o. f&uuml;r 7 &ndash; 14 Tage</p>
</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<ul>
<li>Test Test Test Test Test&nbsp;<em>Test Test</em>: Test Test Test</li>
</ul>
<h3>Komplizierte Erysipele:</h3>
<p><u>Komplizierende Faktoren:</u></p>
<ul>
<li>H&auml;morrhagische Verlaufsformen</li>
<li>Test</li>
<li>Test</li>
<li>Test</li>
<li>Test</li>
</ul>
<table style="border-collapse: collapse; width: 100%;" border="1">
<tbody>
<tr>
<td style="width: 100%;">
<p><strong>Test G&nbsp;</strong>3 x t&auml;glich 10 Mio IE i.v. f&uuml;r 7 &ndash; 14 Tage</p>
</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<ul>
<li>Test Test Test v Test Test Test Test Test V 3 x t&auml;glich 1,2-1,5 Mio IE m&ouml;glich</li>
</ul>
<p><strong>Test-Test:</strong></p>
<table style="border-collapse: collapse; width: 100%;" border="1">
<tbody>
<tr>
<td style="width: 100%;">
<p>Test Test Test Test Test Test:</p>
</td>
</tr>
<tr>
<td style="width: 100%;">
<p><strong>Test G&nbsp;</strong>3 x t&auml;glich 10 Mio IE i.v. f&uuml;r 7 &ndash; 14 Tage</p>
</td>
</tr>
<tr>
<td style="width: 100%;">
<p style="text-align: center;"><strong>Test</strong></p>
</td>
</tr>
<tr>
<td style="width: 100%;">
<p>Test Test <strong>Test V&nbsp;</strong>2 x t&auml;glich 0,4 Mega IU p.o. f&uuml;r 12 Monate</p>
</td>
</tr>
<tr>
<td style="width: 100%; text-align: center;"><strong>ODER</strong></td>
</tr>
<tr>
<td style="width: 100%;">
<p>Test-Test <strong>Benzathin-Penicillin&nbsp;</strong>2,4 Mio IE i.m. alle 2-3 Wochen</p>
</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<ul>
<li><u>IndikTestation Test Test Test:</u> Test Test</li>
<li>Bei Test-Allergie Test Test zur Test Test werden (1x Test 250 mg/d Test 12 Monate)</li>
</ul>
`;

const htmlProps = {
  WebView,
  renderers: {
    table: TableRenderer
  },
  renderersProps: {
    table: {
      // Put the table config here
    },
    iframe: {
      webViewProps: {
        style: { opacity: 0.99 },
      },
    },
  },
  customHTMLElementModels: {
    table: tableModel
  }
};

export default App = () => (
  <ScrollView>
    <HTML source={{ html }} {...htmlProps} />
  </ScrollView>
);