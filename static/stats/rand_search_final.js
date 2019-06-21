var dataRandFinalPath = [{"name": "A*",
                         "opacity": 0.8, "type": "bar",
                         "x": [11, 8, 2, 12, 14, 0, 3, 10, 9, 4, 5, 13, 6, 1, 7, 20, 18, 15, 16, 19, 17, 21, 23, 26, 22, 24, 29, 27, 28, 25, 31, 30],
                         "y": [7541, 7249, 3094, 6908, 4703, 2056, 3918, 8201, 8051, 4442, 5272, 5652, 5924, 2659, 6626, 181, 444, 3597, 2436, 244, 1421, 115, 47, 14, 66, 36, 3, 9, 5, 8, 1, 1]},
                         {"name": "Breadth-first",
                         "opacity": 0.8, "type": "bar",
                         "x": [11, 8, 2, 12, 14, 0, 3, 10, 9, 4, 5, 13, 6, 1, 7, 20, 18, 15, 16, 19, 17, 21, 23, 26, 22, 24, 29, 27, 28, 25, 31, 30],
                         "y": [7541, 7249, 3094, 6908, 4703, 2056, 3918, 8201, 8051, 4442, 5272, 5652, 5924, 2659, 6626, 181, 444, 3597, 2436, 244, 1421, 115, 47, 14, 66, 36, 3, 9, 5, 8, 1, 1]},
                         {"name": "Depth-first", "opacity": 0.8, "type": "bar",
                         "x": [13, 18, 2, 12, 22, 0, 36, 26, 14, 19, 32, 9, 4, 29, 17, 40, 39, 23, 6, 44, 30, 1, 7, 10, 31, 15, 34, 24, 45, 41, 21, 28, 35, 16, 8, 11, 3, 5, 33, 27, 38, 37, 20, 25, 42, 43, 46, 48, 47, 51, 53, 49, 50, 52, 54, 55],
                         "y": [2605, 2401, 1921, 2676, 2231, 2056, 1384, 2164, 2785, 2424, 2003, 2700, 2187, 2154, 2692, 835, 972, 2248, 2381, 367, 2054, 2019, 2485, 2790, 2074, 2783, 1634, 2203, 260, 666, 2208, 2215, 1494, 2739, 2510, 2599, 2276, 2369, 1867, 2119, 1081, 1261, 2246, 2185, 546, 448, 202, 102, 156, 30, 8, 60, 34, 11, 2, 2]}];

var dataRandFinalLayout = {"xaxis": {"title": {"text": "Final Path Length"}},
                           "yaxis": {"title": {"text": "# of Occurrences"}},
                           "legend": {x: 0.7, y: 1.1, font: {size: 8}}};

Plotly.newPlot('rand_search_final', dataRandFinalPath, dataRandFinalLayout, {"displayModeBar": false});

var dataRandSearch = [{"name": "A*",
                         "opacity": 0.8, "type": "bar",
                         "x": [33, 16, 2, 37, 0, 12, 35, 4, 15, 18, 8, 6, 22, 25, 10, 13, 30, 21, 45, 34, 1, 7, 19, 17, 14, 28, 41, 44, 71, 9, 39, 43, 23, 3, 11, 27, 32, 20, 24, 42, 38, 36, 51, 31, 26, 50, 59, 54, 40, 47, 5, 29, 52, 48, 69, 55, 49, 46, 56, 53, 62, 58, 60, 67, 74, 63, 65, 61, 73, 79, 57, 68, 84, 66, 72, 75, 83, 64, 78, 70, 76, 82, 77, 87, 80, 92, 81, 89, 93, 88, 101],
                         "y": [1288, 2466, 2339, 983, 2056, 2830, 1158, 2509, 2751, 2339, 2707, 2743, 2206, 1938, 2556, 2714, 1561, 2235, 596, 1201, 2017, 2669, 2191, 2418, 2605, 1731, 807, 618, 24, 2667, 918, 672, 2111, 2171, 2663, 1806, 1421, 2274, 2017, 741, 1008, 1038, 335, 1478, 1770, 362, 139, 241, 831, 493, 2514, 1579, 282, 472, 33, 199, 430, 507, 189, 295, 70, 159, 103, 40, 16, 58, 46, 96, 15, 10, 141, 27, 7, 43, 17, 12, 9, 59, 8, 21, 17, 11, 6, 2, 8, 1, 5, 1, 2, 1, 1]},
                         {"name": "Breadth-first",
                         "opacity": 0.8, "type": "bar",
                         "x": [65, 26, 4, 46, 62, 1, 32, 71, 61, 5, 47, 40, 15, 8, 50, 36, 11, 64, 18, 23, 63, 74, 72, 3, 14, 39, 31, 54, 10, 59, 24, 51, 28, 80, 19, 69, 21, 16, 6, 48, 42, 68, 38, 13, 53, 25, 67, 34, 22, 49, 33, 43, 66, 45, 70, 56, 55, 35, 20, 77, 30, 7, 17, 60, 73, 79, 85, 12, 9, 44, 84, 27, 29, 76, 2, 75, 57, 37, 0, 52, 78, 82, 41, 81, 58, 83, 87, 86, 89, 88, 91, 90],
                         "y": [1165, 1128, 1165, 1144, 1192, 1171, 1159, 1050, 1158, 1193, 1153, 1154, 1167, 1221, 1127, 1130, 1170, 1168, 1147, 1140, 1107, 976, 1043, 1173, 1195, 1181, 1175, 1169, 1208, 1165, 1123, 1190, 1100, 432, 1167, 1102, 1166, 1225, 1120, 1193, 1173, 1101, 1149, 1112, 1142, 1123, 1100, 1122, 1194, 1147, 1137, 1136, 1077, 1199, 1012, 1135, 1111, 1119, 1172, 716, 1176, 1204, 1166, 1111, 955, 470, 67, 1149, 1215, 1112, 97, 1120, 1215, 839, 1260, 868, 1110, 1133, 1295, 1114, 653, 238, 1150, 286, 1188, 178, 13, 38, 3, 10, 1, 1]},
                         {"name": "Depth-first", "opacity": 0.8, "type": "bar",
                         "x": [76, 53, 2, 58, 24, 0, 46, 33, 15, 45, 56, 73, 30, 25, 6, 43, 52, 66, 47, 75, 67, 34, 39, 14, 21, 13, 1, 7, 63, 38, 59, 65, 74, 51, 23, 71, 79, 70, 4, 22, 77, 19, 8, 11, 9, 80, 28, 35, 48, 78, 69, 10, 49, 50, 64, 62, 36, 17, 68, 54, 57, 72, 29, 31, 41, 40, 12, 60, 55, 44, 26, 18, 3, 37, 20, 27, 42, 83, 61, 16, 32, 81, 5, 85, 82, 87, 84, 86, 89, 88],
                         "y": [790, 1180, 1166, 1191, 1126, 1178, 1130, 1199, 1205, 1163, 1134, 984, 1208, 1125, 1141, 1149, 1219, 1111, 1167, 900, 1102, 1179, 1153, 1191, 1139, 1137, 1194, 1187, 1044, 1148, 1156, 1120, 941, 1184, 1167, 1024, 508, 1045, 1117, 1155, 787, 1141, 1148, 1143, 1164, 400, 1108, 1161, 1220, 623, 1067, 1183, 1234, 1128, 1197, 1151, 1181, 1132, 1091, 1181, 1165, 974, 1164, 1141, 1199, 1207, 1130, 1208, 1104, 1209, 1121, 1112, 1196, 1193, 1137, 1184, 1104, 152, 1119, 1152, 1206, 349, 1165, 61, 215, 17, 104, 31, 4, 4]}];

var dataRandSearchLayout = {"xaxis": {"title": {"text": "# of Spaces Searched"}},
                           "yaxis": {"title": {"text": "# of Occurrences"}},
                           "legend": {x: 0.7, y: 1.1, font: {size: 8}}};

Plotly.newPlot('rand_search_space', dataRandSearch, dataRandSearchLayout, {"displayModeBar": false});