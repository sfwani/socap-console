const modules = [
  { id: 'csvTab', title: 'CSV to Ticket', src: 'modules/csv2ticket.js', active: true },
  { id: 'kqlTab', title: 'KQL Queries', src: 'modules/kql.js' },
  { id: 'enrichTab', title: 'Enrich IOC', src: 'modules/enrich-ioc.js' },
  { id: 'redactTab', title: 'Redact', src: 'modules/redact.js' },
  { id: 'h2cTab', title: 'Header to Curl', src: 'modules/h2c.js' },
  { id: 'htmlAnalyzerTab', title: 'HTML Analyzer', src: 'modules/html-analyzer.js' },
  { id: 'iocExtTab', title: 'IOC Extractor', src: 'modules/ioc-extractor.js' },
  { id: 'defangTab', title: 'Defang', src: 'modules/defang.js' },
  { id: 'encodeTab', title: 'Encode/Decode', src: 'modules/encode-decode.js' },
  { id: 'timestampTab', title: 'Time Convert', src: 'modules/timestamp.js' }
];
