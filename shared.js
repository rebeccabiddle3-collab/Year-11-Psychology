(function(){
  const pages = [
    {href:'index.html',      label:'Overview'},
    {href:'objectives.html', label:'Objectives'},
    {href:'assessments.html',label:'Assessments'},
    {href:'termplan.html',   label:'Term Plan'},
    {href:'tracking.html',   label:'Tracking'},
    {href:'lessons.html',    label:'Lessons'},
    {href:'readings.html',   label:'Readings'},
  ];
  const cur = location.pathname.split('/').pop() || 'index.html';
  const links = pages.map(p =>
    `<li><a href="${p.href}"${(cur===p.href||(!cur&&p.href==='index.html'))?' class="active"':''}>${p.label}</a></li>`
  ).join('');
  const revisionLink = `<li><a href="psych_revision.html" target="_blank" style="color:var(--gold-l);border:1px solid rgba(201,151,58,.4);border-radius:4px;padding:.15rem .55rem;margin-left:.3rem;white-space:nowrap">📊 FIA1 Revision</a></li>`;

  const nav = document.getElementById('site-nav');
  if(nav) nav.innerHTML =
    `<a href="index.html" class="nav-brand" style="display:flex;align-items:center;gap:.6rem"><img src="rsc_logo.png" alt="RSC" style="height:34px;width:auto;border-radius:3px"><span style="color:#fff">Mrs B · </span><span style="color:var(--gold-l)">Psychology</span></a>
     <ul class="nav-links">${links}${revisionLink}</ul>`;

  const foot = document.getElementById('site-footer');
  if(foot) foot.innerHTML =
    `<div class="ft-left">
       <img src="rsc_logo.png" alt="RSC" style="height:44px;width:auto;border-radius:4px;flex-shrink:0">
       <div>
         <div class="ft-name">Mrs Rebecca Biddle</div>
         <div class="ft-sub"><a href="mailto:rbidd9@eq.edu.au" style="color:var(--teal-l);text-decoration:none">rbidd9@eq.edu.au</a> &nbsp;·&nbsp; L7 Staffroom</div>
       </div>
     </div>
     <div class="ft-right">
       <b>Year 11 Senior Psychology · Units 1 &amp; 2 · 2025</b><br>
       Redlynch State College
     </div>`;
})();
