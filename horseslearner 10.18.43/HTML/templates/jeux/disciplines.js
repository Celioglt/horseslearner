const disciplines = {
    "Amazone": "oui",
    "L'attelage": "oui",
    "Camargue": "oui",
    "CCE": "oui",
    "Course de galop ou de trot monté ou attelé": "oui",
    "Course de trot": "oui",
    "Doma Vaquera": "oui",
    'Dressage': "oui",
    "Dressage paraéquestre": "oui",
    "Horse-javelot (HJ)": "non",
    "Prestigieuse": "non",
    "La calèche": "non",
    "La camarguaise": "non",
    "CEC": "non",
    "Galoping": "non",
    "Trotting": "non",
    "Toma Vaquero": "non",
    "Equifeel": "oui",
    "Equifell": "non",
    "Equifun": 'oui',
    "Equitation de travail": "oui",
    "Equitation soutenue": "non",
    "Equitation islandaise": 'oui',
    "Equitation irlandaise": 'non',
    "Endurance": 'oui',
    "Persévérance": 'non',
    "Endurance en attelage": 'oui',
    "Endurance en calèche": "non",
    "Horse-ball": 'oui',
    "Hunter": "oui",
    'Hinter': 'non',
    "CSO": "oui",
    "COS": 'non',
    "Polo": "oui",
    "Horse-Golf": 'non',
    "Pony-games": 'oui',
    "Ski joëring": 'oui',
    "Ski de fond équestre": 'non',
    "TREC": 'oui',
    'TREK': 'non',
    "Voltige": 'oui',
    "Accrobatie": 'non',
    "Western equitation": 'oui'
};

function createDisciplinesList() {
    const disciplinesContainer1 = document.getElementById("disciplinesList1");
    const disciplinesContainer2 = document.getElementById("disciplinesList2");
    const disciplinesContainer3 = document.getElementById("disciplinesList3");

    // Efface les listes précédentes
    disciplinesContainer1.innerHTML = '';
    disciplinesContainer2.innerHTML = '';
    disciplinesContainer3.innerHTML = '';

    // Divise les disciplines en trois groupes
    const disciplinesArray = Object.entries(disciplines);
    const groupSize = Math.ceil(disciplinesArray.length / 3);

    // Crée une colonne pour chaque groupe
    const group1 = disciplinesArray.slice(0, groupSize);
    const group2 = disciplinesArray.slice(groupSize, groupSize * 2);
    const group3 = disciplinesArray.slice(groupSize * 2);

    // Fonction pour ajouter les disciplines à une liste
    function addDisciplinesToList(container, group) {
        for (const [discipline, points] of group) {
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.name = discipline;
            checkbox.value = points; // Utiliser la valeur 'oui' ou 'non'

            const label = document.createElement("label");
            label.textContent = discipline;

            const listItem = document.createElement("li");
            listItem.appendChild(checkbox);
            listItem.appendChild(label);

            container.appendChild(listItem);
        }
    }

    // Ajoute les disciplines à chaque liste
    addDisciplinesToList(disciplinesContainer1, group1);
    addDisciplinesToList(disciplinesContainer2, group2);
    addDisciplinesToList(disciplinesContainer3, group3);
}
// Fonction pour calculer les points
function calculatePoints() {
    const disciplinesLists = document.querySelectorAll('.columns ul');
    let totalPoints = 0;
    disciplinesLists.forEach(disciplinesList => {
        for (const disciplineCheckbox of disciplinesList.querySelectorAll('input[type="checkbox"]')) {
            if (disciplineCheckbox.checked) {
                // Ajouter ou enlever des points en fonction de la valeur de la case
                totalPoints += disciplineCheckbox.value === "oui" ? 1 : -1;
            }
        }
    });
    const totalPointsElement = document.getElementById("totalPoints");
    totalPointsElement.textContent = "Total des points : " + totalPoints; // Afficher le total des points dans la page HTML
}
