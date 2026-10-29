% Plantilla de CV estilo Harvard (una columna, serif, títulos con regla).
% Uso: \documentclass[spanish|english]{cv} (por defecto spanish), luego
% \cvheader y los comandos de abajo. Cada variante es un .tex propio.
\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{cv}[2026/10/29 CV estilo Harvard]
\DeclareOption{english}{\PassOptionsToPackage{english}{babel}}
\DeclareOption{spanish}{\PassOptionsToPackage{spanish}{babel}}
\ExecuteOptions{spanish}
\ProcessOptions\relax
\LoadClass[10pt,a4paper]{article}

\RequirePackage[utf8]{inputenc}
\RequirePackage[T1]{fontenc}
\RequirePackage[semibold]{plex-serif}
\RequirePackage{babel}
\RequirePackage[margin=1.3cm,top=1cm,bottom=0.8cm]{geometry}
\RequirePackage{fontawesome5}
\RequirePackage{enumitem}
\RequirePackage{titlesec}
\RequirePackage[hidelinks]{hyperref}
\RequirePackage{xcolor}
\RequirePackage{array}

\pagestyle{empty}
\setlength{\parindent}{0pt}
\setlength{\parskip}{0pt}
\raggedright\hyphenpenalty=10000\emergencystretch=2em
\renewcommand{\baselinestretch}{1.0}
\setlist[itemize]{leftmargin=1.2em,itemsep=1pt,topsep=2pt,parsep=0pt}

% Sección: título pequeño con regla debajo.
\titleformat{\section}{\bfseries\small}{}{0pt}{}[\vspace{-1pt}\titlerule]
\titlespacing*{\section}{0pt}{8pt}{3pt}

\newcommand{\cvlink}[2]{\href{#1}{\underline{#2}}}
\newcommand{\cvsep}{\hspace{0.5em}{\color{black!60}|}\hspace{0.5em}}
\newcommand{\cvdot}{\ {\color{black!60}·}\ }

% \cvheader{nombre}{titular}{ítems de contacto separados con \cvsep}
\newcommand{\cvheader}[3]{%
  {\LARGE\bfseries #1\par}\vspace{2pt}
  {\small #2\par}\vspace{3pt}
{\footnotesize #3\par}}

% \cventry{organización}{fecha}{cargo}{lugar}: dos filas con fecha y
% lugar a la derecha.
\newcommand{\cventry}[4]{%
  \vspace{3pt}\noindent{\bfseries #1}\hfill{\bfseries #2}\\
#3\hfill #4\par\vspace{1pt}}

% \cvproject{nombre}{fecha}{url}: fila de título y, si #3 no está vacío,
% su enlace; la descripción va después.
\newcommand{\cvproject}[3]{%
  \vspace{3pt}\noindent{\bfseries #1}\hfill{\bfseries #2}\par
  \if\relax\detokenize{#3}\relax\else
  {\footnotesize\faLink}\ \cvlink{#3}{#3}\par
  \fi
\vspace{1pt}}

% \cvcert{nombre}{fecha}{emisor}{url}{texto del enlace}: una sola fila.
\newcommand{\cvcert}[5]{%
  \vspace{3pt}\noindent{\bfseries #1}\cvdot #3\cvdot
{\footnotesize\faLink}\ \cvlink{#4}{#5}\hfill{\bfseries #2}\par}

% \cvcolumns{n}{contenido}: tabla de n columnas iguales para
% habilidades e idiomas.
\newcommand{\cvcolumns}[2]{%
  \noindent
  \begin{minipage}[t]{\linewidth}\setlength{\tabcolsep}{0pt}%
    \begin{tabular}{*{#1}{>{\raggedright\arraybackslash}p{\dimexpr\linewidth/#1-1em\relax}@{\hspace{1em}}}}#2
    \end{tabular}
\end{minipage}}
