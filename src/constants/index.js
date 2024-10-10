
import { 
  test, 
  test2,
  test3, 
  test4,
  ali_headshoot,
} from '../assets'; 

const image_carousel = [
    { name: "Img 1", image: test },
    { name: "Img 2", image: test3 },
    { name: "Img 3", image: test4 },
  ];

  const blogs = [
    { id: 1, 
      title: "First Blog Post", 
      summary: "This is the first blog post summary.", 
      date: "September 10, 2024", 
      content: "This is the content of the first blog post. It can contain text, images, videos, and more.",},
    { id: 2, 
      title: "Second Blog Post", 
      summary: "This is the second blog post summary.", 
      date: "September 11, 2024", 
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec nunc vel nisl eleifend convallis. Maecenas arcu elit, malesuada sit amet mauris pulvinar, ornare tristique enim. Curabitur ultricies sapien sed iaculis accumsan. Cras a diam in felis venenatis volutpat. Sed cursus leo vestibulum, cursus sem id, eleifend metus. Cras scelerisque nunc at nisl sagittis, pretium pulvinar arcu aliquet. Ut convallis sapien nulla, eget mollis tellus facilisis et. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam risus enim, tincidunt et nulla pretium, sodales sagittis turpis. Nulla quis augue ultrices, dictum diam non, laoreet lorem. In nec ligula semper est feugiat vulputate vitae ac diam. Suspendisse dictum justo sed elementum vehicula. In a leo malesuada, efficitur tortor a, efficitur metus. Nulla eu nisl vehicula, sagittis purus eget, pharetra arcu. Donec eu egestas ipsum. Vestibulum felis orci, commodo in vulputate et, pretium eu risus.", },
    { id: 3, 
        title: "Third Blog Post", 
        summary: "This is the third blog post summary.", 
        date: "September 12, 2024", 
        content: "This is the content of the first blog post. It can contain text, images, videos, and more.", },
    { id: 4, 
        title: "Fourth Blog Post", 
        summary: "This is the fourth blog post summary.", 
        date: "September 13, 2024", 
        content: "This is the content of the first blog post. It can contain text, images, videos, and more.", },

    // Add more blogs here
  ];

  const team_members = [{
    name: "Ernest Wang",
    role: "Team Lead - Hardware",
    image: test,
    linkedin: "https://www.linkedin.com/in/ernestwang31/"
  },
  {
    name: "Ethan Ahn",
    role: "Team Lead - Controls",
    image: test,
    linkedin: "https://www.linkedin.com/in/ethanahn/"
  },
  {
    name: "Camron Sabahi",
    role: "Team Lead - Controls",
    image: test,
    linkedin: "https://www.linkedin.com/in/camron-sabahi/"
  },
  {
    name: "Ali Elhor",
    role: "Team Lead - Software/AI",
    image: ali_headshoot,
    linkedin: "https://www.linkedin.com/in/ali-elhor/"
  },
  {
    name: "David Yen",
    role: "Team Lead - Hardware",
    image: test,
    linkedin: "https://www.linkedin.com/in/davidyenn/"
  },
  {
    name: "Karthigan Uthayan",
    role: "Team Lead - Software/AI",
    image: test,
    linkedin: "https://www.linkedin.com/in/karthiganu2004/"
  },
  {
    name: "Dylan Finlay",
    role: "Team Lead - Software/AI",
    image: test,
    linkedin: "https://www.linkedin.com/in/dylanfinlay33/"
  }]

  const subteam_apps = [
    {
      title: "Software",
      description: "Our ML team focuses on implementing vision and decision-making algorithms for our robots.",
      skills: ["Python", "TensorFlow", "Data Analysis"],
      apply: "Submit your resume through the application form."
    },
    {
      title: "Controls",
      description: "The controls team designs algorithms to maintain balance and control movements in the robots.",
      skills: ["C++", "Control Systems", "Mathematical Modeling"],
      apply: "Join our Discord and apply through the form."
    },
    {
      title: "Mechanical",
      description: "The mechanical team ensures the power systems, sensors, and actuators are working smoothly.",
      skills: ["CAD", "3D Printing", "Mechanical Engineering"],
      apply: "Submit your portfolio along with your application."
    },
    {
      title: "Hardware",
      description: "Our hardware team designs and fabricates the robot's physical structure.",
      skills: ["PCB Design", "Soldering", "Embedded Systems"],
      apply: "Reach out to us and apply via the provided form."

    }
  ];

  const subteam_descriptions = [
    {
      id: 'software',
      title: 'Software Team',
      description: 'The Software/ML/AI Team is responsible for developing the algorithms that drive our humanoid robots. This includes computer vision for recognizing the ball and opponents, decision-making algorithms for strategic play, and machine learning models to improve robot performance over time. The team works with cutting-edge technologies and collaborates closely with other subteams to integrate software with hardware seamlessly.'
    },
    {
      id: 'hardware',
      title: 'Hardware Team',
      description: 'The Hardware Team is responsible for designing and fabricating the physical components of our humanoid robots. This includes creating custom PCBs, integrating sensors and actuators, and ensuring the overall structural integrity of the robots. The team works closely with the software and mechanical teams to ensure seamless integration of all systems.'
    },
    {
      id: 'electric',
      title: 'Controls Team',
      description: 'The Controls Team is responsible for developing and implementing the algorithms that control the movements and balance of our humanoid robots. This includes designing control systems for walking, running, and kicking, as well as ensuring stability during dynamic movements. The team works closely with the mechanical and software teams to integrate these control systems seamlessly into the robots.'
    },
    {
      id: 'mechanical',
      title: 'Mechanical Team',
      description: 'The Mechanical Team is responsible for designing and building the physical structures and mechanisms of our humanoid robots. This includes creating the chassis, joints, and other mechanical components that allow the robots to move and perform tasks. The team works closely with the hardware and controls teams to ensure that the mechanical systems are robust, reliable, and seamlessly integrated with the electronic and control systems.'
    },
    // Add more subteams as needed
  ];

  const why_us_section = [
    {
      title: "Unique practical experience",
      content:
        "Our team offers a unique hands on experience on working with bipedal robots and complex RL algorithms, allowing you to polish and hone your skills in an new but increasingly demanding environment",
    },
    {
      title: "Point B",
      content:
        "No clue gang we lowkey don't want new members yet styll",
    },
    {
      title: "Point C",
      content:
        "Yap yap yap yap yap yap",
    },
    {
      title: "Point D",
      content:
        "Yap yap yap yap yap yap",
    },
  ];

  
  


  export { blogs, image_carousel, team_members, subteam_apps, subteam_descriptions, why_us_section };