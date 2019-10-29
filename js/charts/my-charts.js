google.charts.load("current", {packages:['corechart']});
        google.charts.setOnLoadCallback(drawChart);
        function drawChart() {
            var data = google.visualization.arrayToDataTable([
                ['Aproveitamento/Não ', 'Aproveitável/Encaminhado', 'Aproveitável',
                'Não aproveitável', { role: 'annotation' } ],
                ['Resíduos urbanos', 13, 27, 60, '']
              ]);
            
            var formatter = new google.visualization.NumberFormat(
                {suffix: '%', pattern: '##'});
            
            formatter.format(data, 1);
            formatter.format(data, 2);
            formatter.format(data, 3);
            
            var view = new google.visualization.DataView(data);
            
            view.setColumns([0, 1,
                            { calc: "stringify",
                                sourceColumn: 1,
                                type: "string",
                                role: "annotation" }, 2,
                            { calc: "stringify",
                                sourceColumn: 2,
                                type: "string",
                                role: "annotation" }, 3,
                            { calc: "stringify",
                                sourceColumn: 3,
                                type: "string",
                                role: "annotation" }]);

            var options = {
                width: 580,
                height: 200,
                legend: { position: 'top', maxLines: 3 },
                bar: { groupWidth: '50%' },
                hAxis: {minValue: 0, maxValue: 100, format: '#\'%\''},
                isStacked: true,
                series: {
                    0:{color:'#0000ff'},
                    1:{color:'#339933'},
                    2:{color:'#8c8c8c'}
                }
              };
            
            var chart = new google.visualization.BarChart(document.getElementById("intro-chart"));
            
            chart.draw(view, options);
        }

        google.charts.setOnLoadCallback(drawChart1);
        function drawChart1() {
            var data = google.visualization.arrayToDataTable([
                ["", ""],
                ["", 75],
            ]);
            
            var formatter = new google.visualization.NumberFormat(
                {suffix: '%', pattern: '##'});
            
            formatter.format(data, 1);

            var view = new google.visualization.DataView(data);

            view.setColumns([0, 1,
                            { calc: "stringify",
                                sourceColumn: 1,
                                type: "string",
                                role: "annotation" }]);

            var options = {
                    title: "Quantidade de pessoas que não separam materias recicláveis",
                    width: 550,
                    height: 100,
                    bar: {groupWidth: "75%"},
                    legend: { position: "none" },
                    hAxis: {minValue: 0, maxValue: 100, format: '#\'%\''},
                    animation: {startup: true,   duration: 1000, easing: 'out', },
                    annotations: {alwaysOutside: true}
            };

            var chart = new google.visualization.BarChart(document.getElementById("slide1-chart1"));

            chart.draw(view, options);
      }
    
        google.charts.setOnLoadCallback(drawChart2);
        function drawChart2() {
            var data = google.visualization.arrayToDataTable([
                ["", ""],
                ["", 39],
            ]);
            
            var formatter = new google.visualization.NumberFormat(
                {suffix: '%', pattern: '##'});
            
            formatter.format(data, 1);

            var view = new google.visualization.DataView(data);

            view.setColumns([0, 1,
                            { calc: "stringify",
                                sourceColumn: 1,
                                type: "string",
                                role: "annotation" }]);

            var options = {
                    title: "Pessoas que nem mesmo separam material orgânico de inorgânico",
                    width: 550,
                    height: 100,
                    bar: {groupWidth: "75%"},
                    legend: { position: "none" },
                    hAxis: {minValue: 0, maxValue: 100, format: '#\'%\''},
                    animation: {startup: true,   duration: 1000, easing: 'out', },
                    annotations: {alwaysOutside: true}
            };

            var chart = new google.visualization.BarChart(document.getElementById("slide1-chart2"));

            chart.draw(view, options);
      }
    
        google.charts.setOnLoadCallback(drawChart3);
        function drawChart3() {
            var data = google.visualization.arrayToDataTable([
                ["", ""],
                ["", 56],
            ]);
            
            var formatter = new google.visualization.NumberFormat(
                {suffix: '%', pattern: '##'});
            
            formatter.format(data, 1);

            var view = new google.visualization.DataView(data);

            view.setColumns([0, 1,
                            { calc: "stringify",
                                sourceColumn: 1,
                                type: "string",
                                role: "annotation" }]);

            var options = {
                    title: "Pessoas que não usam serviço de coleta seletiva",
                    width: 550,
                    height: 100,
                    bar: {groupWidth: "75%"},
                    legend: { position: "none" },
                    hAxis: {minValue: 0, maxValue: 100, format: '#\'%\''},
                    animation: {startup: true,   duration: 1000, easing: 'out', },
                    annotations: {alwaysOutside: true}
            };

            var chart = new google.visualization.BarChart(document.getElementById("slide1-chart3"));

            chart.draw(view, options);
      }
    
        google.charts.setOnLoadCallback(drawChart4);
        function drawChart4() {
            var data = google.visualization.arrayToDataTable([
                ["Material", "Porcentagem", { role: "style" } ],
                ["TetraPak", 4, "#0000ff"],
                ["PET", 40, "#ff0000"],
                ["Alumínio", 47, "#ffff00"],
                ["Papel", 50, "color: #0000ff"],
                ["Vidro", 64, "color: #274e13"],
                ["Plástico", 77, "color: #ff0000"]
            ]);
            
            var formatter = new google.visualization.NumberFormat(
                {suffix: '%', pattern: '##'});
            
            formatter.format(data, 1);

            var view = new google.visualization.DataView(data);
            
            view.setColumns([0, 1,
                           { calc: "stringify",
                             sourceColumn: 1,
                             type: "string",
                             role: "annotation" },
                           2]);

            var options = {
                title: "Nível de consciência sobre a reciclabilidade de materiais:",
                width: 700,
                height: 300,
                bar: {groupWidth: "75%"},
                legend: {position: "none" },
                vAxis: {minValue: 0, maxValue: 100, format: '#\'%\''},
                animation: {startup: true,   duration: 1000, easing: 'out', },
                annotations: {alwaysOutside: true}
            };
            
            var chart = new google.visualization.ColumnChart(document.getElementById("slide2-chart"));
            
            chart.draw(view, options);
        }

        google.charts.setOnLoadCallback(drawChart5);
        function drawChart5() {
            var data = google.visualization.arrayToDataTable([
                ['', ''],
                ['', 42],
                ['Acham que o lixo vai para aterro sanitário', 58],
            ]);

            var options = {
                width: 350,
                height: 250,
                pieHole: 0.4,
                slices: {
                    0: { color: 'transparent' },
                    1: { color: '#805500' }
                }
            };

            var chart = new google.visualization.PieChart(document.getElementById('slide3-chart1'));
            
            chart.draw(data, options);
        }
    
        google.charts.setOnLoadCallback(drawChart6);
        function drawChart6() {
            var data = google.visualization.arrayToDataTable([
                ['', ''],
                ['', 51],
                ['Afirmam que é difícil encontrar informações na cidade', 49],
            ]);

            var options = {
                width: 350,
                height: 150,
                pieHole: 0.4,
                slices: {
                    0: { color: 'transparent' },
                    1: { color: '#cccccc' }
                }
            };

            var chart = new google.visualization.PieChart(document.getElementById('slide3-chart2'));
            
            chart.draw(data, options);
        }
    
        google.charts.setOnLoadCallback(drawChart7);
        function drawChart7() {
            var data = google.visualization.arrayToDataTable([
                ['', ''],
                ['', 56],
                ['Afirmam que o serviço não é disponibilizado', 44],
            ]);

            var options = {
                width: 360,
                height: 150,
                pieHole: 0.4,
                slices: {
                    0: { color: 'transparent' },
                    1: { color: '#000000' }
                }
            };

            var chart = new google.visualization.PieChart(document.getElementById('slide3-chart3'));
            
            chart.draw(data, options);
        }
    
        google.charts.setOnLoadCallback(drawChart8);
        function drawChart8() {
            var data = google.visualization.arrayToDataTable([
                ['Condição', 'Trabalhadores'],
                ['Cooperativa', 28.3],
                ['Associação', 31.3],
                ['Informalidade', 40.3], ]);
            
            var options = {
                width: 700,
                height: 350,
                title: 'Condição de trabalho de catadores:',
                legend: 'none',
                pieSliceText: 'label',
                slices: { 
                    0: {color: '#339933'},
                    1: {color: '#0000ff'},
                    2: {offset: 0.15, color: '#ff0000'},
                },
            };

            var chart = new google.visualization.PieChart(document.getElementById('slide4-chart'));
            
            chart.draw(data, options);
        }