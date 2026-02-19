// vis.js
// Simple SVG bar chart for beginners

function createSVG(width, height) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", width);
  svg.setAttribute("height", height);
  svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
  svg.style.maxWidth = "100%";
  svg.style.height = "auto";
  return svg;
}

function addText(svg, x, y, text, size = 12, anchor = "start") {
  const t = document.createElementNS("http://www.w3.org/2000/svg", "text");
  t.setAttribute("x", x);
  t.setAttribute("y", y);
  t.setAttribute("fill", "#000000");
  t.setAttribute("font-size", size);
  t.setAttribute("font-family", "system-ui, -apple-system, Segoe UI, Roboto, Inter, sans-serif");
  t.setAttribute("text-anchor", anchor);
  t.setAttribute("dominant-baseline", "middle");
  t.textContent = text;
  svg.appendChild(t);
}


function addRect(svg, x, y, w, h, fill) {
  const r = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  r.setAttribute("x", x);
  r.setAttribute("y", y);
  r.setAttribute("width", w);
  r.setAttribute("height", h);
  r.setAttribute("rx", 10);
  r.setAttribute("fill", fill);
  svg.appendChild(r);
}

function drawBarChart() {
  const width = 900;
  const height = 500;

  const paddingLeft = 220;
  const paddingTop = 80;
  const barHeight = 26;
  const barGap = 16;
  const chartWidth = 600;

  const data = [
    { artist: "Kanye West", hours: 120 },
    { artist: "Daniel Caesar", hours: 96 },
    { artist: "Playboi Carti", hours: 88 },
    { artist: "Jim Legxacy", hours: 80 },
    { artist: "Nino Paid", hours: 74 },
    { artist: "Dave", hours: 68 },
    { artist: "Billie Eilish", hours: 60 },
    { artist: "LUCKI", hours: 54 },
    { artist: "Joji", hours: 48 },
    { artist: "YT", hours: 42 }
  ];

  const maxHours = Math.max(...data.map(d => d.hours));

  const svg = createSVG(width, height);

  
  data.forEach((d, i) => {
  const y = paddingTop + i * (barHeight + barGap);

  // Bar background first
  addRect(svg, paddingLeft, y, chartWidth, barHeight, "#f5f4f0");

  // Bar fill second
  const barWidth = (d.hours / maxHours) * chartWidth;
  addRect(svg, paddingLeft, y, barWidth, barHeight, "#0000ff");

  // Artist label last, so it stays on top
  addText(
    svg,
    paddingLeft - 12,
    y + barHeight / 2,
    d.artist,
    12,
    "end"
  );

  // Value label last
  addText(
    svg,
    paddingLeft + barWidth + 10,
    y + barHeight / 2,
    `${d.hours}h`,
    12,
    "start"
  );
});


  return svg;
}

function addImage(svg, href, x, y, w, h) {
  const img = document.createElementNS("http://www.w3.org/2000/svg", "image");
  img.setAttribute("href", href);
  img.setAttribute("x", x);
  img.setAttribute("y", y);
  img.setAttribute("width", w);
  img.setAttribute("height", h);
  svg.appendChild(img);
  return img;
}

function drawSpikeImageViz() {
  const img = document.createElement("img");
  img.src = "spike-viz.png";
  img.style.maxWidth = "100%";
  img.style.height = "auto";
  img.style.display = "block";
  return img;
}




document.addEventListener("DOMContentLoaded", () => {
  const c1 = document.getElementById("viz1");
  if (c1) c1.appendChild(drawBarChart());

  const c2 = document.getElementById("viz2");
  if (c2) c2.appendChild(drawSpikeImageViz());
});

