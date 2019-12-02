const projects = [
    {
        name: 'Institute for Indian Magicians',
        description: '<i>Architectural Thesis</i>',
        main: 'Magic school BnW.jpg',
        hover: 'Magic school Colour.jpg',
        layout: 'img-top',
        page: '',
        classes: ''
    },
    {
        name: 'Dr. A.P.J. Abdul Kalam Memorial',
        description: ' <i>Winning entry to the built project</i> ',
        main: 'APJ bnw.jpg',
        hover: 'APJ color.jpg',
        layout: 'img-top',
        page: 'apj.html',
        classes: ''
    },
    {
        name: 'E-Vaahan',
        description: 'Smart transportation system for IITB Campus',
        main: 'E Vaahan BnW.jpg',
        hover: 'E Vaahan.jpg',
        layout: 'img-top',
        page: 'evaahan.html',
        classes: 'light-green'
    },
    {
        name: 'DTAd',
        description: 'Dysphagia Therapy Assisting Device <i>Winning project Mechaton\'19 Israel</i>',
        main: 'DTAd Bnw.jpg',
        hover: 'DTAd.jpg',
        layout: 'img-top',
        page: 'DTA verification low.pdf',
        classes: 'light-green'
    },
    {
        name: 'Instructional Design',
        description: '<i>Project 2 (mini)</i>',
        main: 'Instructional Design BnW.jpg',
        hover: 'Instructional Design.jpg',
        layout: 'img-top',
        page: 'Instructional design o1.pdf',
        classes: 'light-green'
    },
    {
        name: 'Our Canoe',
        description: 'Culture Centre Senegal Africa. <i>Competition Entry</i>',
        main: 'Canoebnw.jpg',
        hover: 'Canoe.jpg',
        layout: 'img-top',
        page: '',
        classes: ''
    },
    {
        name: 'Museum of Language London',
        description: '<i>Among top 50 in Internation competition</i>',
        main: 'Museum of LAnguage bnw.jpg',
        hover: 'Museum of LAnguage.jpg',
        layout: 'img-top',
        page: '',
        classes: ''
    },
    {
        name: 'Service Design',
        description: 'IDC placement service & food service in office',
        main: 'service bnW.jpg',
        hover: 'service.jpg',
        layout: 'img-top',
        page: '',
        classes: 'light-green'
    },
    {
        name: 'Footreak',
        description: 'Foot based interactive installation for phoysical fitness',
        main: 'footreack BnW.jpg',
        hover: 'footreack.jpg',
        layout: 'img-top',
        page: 'Footreak.pdf',
        classes: 'light-green'
    },
    {
        name: 'Beam On',
        description: 'Educational board game for school children',
        main: 'borad game n.jpg',
        hover: 'borad game.jpg',
        layout: 'img-top',
        page: '',
        classes: 'light-green'
    },
    {
        name: 'Interior Design',
        description: 'project as a design consultant',
        main: 'Interior BnW.jpg',
        hover: 'Interior.jpg',
        layout: 'img-top',
        page: '',
        classes: ''
    },
    {
        name: 'Oblivian',
        description: 'Nuclear Landmarker System, New Mexico. <i>Competition Entry</i>',
        main: 'nuclear bnw.jpg',
        hover: 'nuclear.jpg',
        layout: 'img-down',
        page: 'oblivian.html',
        classes: ''
    },
    {
        name: 'DataViz.',
        description: 'GeoViz, datastories, conceptual mapping',
        main: 'Data Viz BnW.jpg',
        hover: 'Data Viz.jpg',
        layout: 'img-top',
        page: '',
        classes: 'light-green'
    },
    {
        name: 'Note Box',
        description: 'Currency identification tool for visually impaired people',
        main: 'Notebox bnw.jpg',
        hover: 'Notebox.jpg',
        layout: 'img-top',
        page: '',
        classes: 'light-green'
    },
    {
        name: 'Circlization',
        description: 'Cyber-Neuro- Physical Educational game ',
        main: 'circlization BnW.jpg',
        hover: 'circlization.jpg',
        layout: 'img-top',
        page: '',
        classes: 'light-green'
    },
    {
        name: 'Voluteer',
        description: '',
        main: 'NGO bnw.jpg',
        hover: 'NGO clr.jpg',
        layout: 'img-top',
        page: '',
        classes: ''
    },
    {
        name: 'Landscape Design',
        description: 'redesigning urban park',
        main: 'LAndscape BnW.jpg',
        hover: 'LAndscape.jpg',
        layout: 'img-top',
        page: '',
        classes: ''
    },
    {
        name: 'Shollarom',
        description: 'Game design for elderly people with dementia <i>Internship & Research</i>',
        main: 'shollarom bnw.jpg',
        hover: 'shollarom.jpg',
        layout: 'img-top',
        page: '',
        classes: 'light-green'
    }
];
const projectColumns=2,projectsLength=projects.length;
function showSectionImg(event){
    document.getElementById("img").src = "banner/"+event.target.getAttribute('data-section-img');
}
function backnormal(event){
    document.getElementById("img").src = "banner/00banner.jpg";
}
function showOverlay(event){
    $('.overlay').removeClass('hide');
}
function hideOverlay(event){
    $('.overlay').addClass('hide');
}
function projectMouseOver(event){
    event.currentTarget.children[0].src = "Icons/"+event.currentTarget.getAttribute('data-img-hover');
}
function projectMouseOut(event){
    var e = event.toElement || event.relatedTarget;
    if (e.parentNode == this || e == this) {
       return;
    }
    event.currentTarget.children[0].src = "Icons/"+event.currentTarget.getAttribute('data-img');
}

$(document).ready(function () {

    let $projectsEl = $('#projects');
    let gridEl=`<div class="row">`;
    
    projects.map(function(project,i){
        if(i%5===0) gridEl+=`</div><div class="row">`;
        gridEl+=`
        <div class="col-md-3 project ${project.classes}" data-page="${project.page}"data-img-hover="${project.hover}" data-img="${project.main}">
            <img src="Icons/${project.main}" alt="Lights" style="width:100%">
            <div class="caption">
                <p class="project-name">${project.name}</p>
                <p class="project-desc">${project.description}</p>
            </div>
        </div>`;
    })
    gridEl+="</div>";
    $(gridEl).appendTo($projectsEl);
    $('.project').hover(projectMouseOver,projectMouseOut);
    $('.project').click(function(event){
        const page = event.currentTarget.getAttribute('data-page');
        page && window.open(page,"_self");
    });
});
