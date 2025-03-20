import React from "react";
import { motion } from "framer-motion";
import AppScreen from "./AppScreen";
import {
  SiTypescript,
  SiPython,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiAstro,
  SiNodedotjs,
  SiDeno,
  SiExpress,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiGit,
  SiGithub,
  SiGitlab,
  SiGooglecloud,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiJest,
  SiNeovim,
  SiGrafana,
  SiPrometheus,
  SiCypress,
  SiSentry,
  SiElectron,
  SiTerraform,
  SiPulumi,
  SiAnsible,
  SiHelm,
  SiElasticsearch,
  SiRabbitmq,
  SiNginx,
  SiPnpm,
  SiApachekafka,
  SiSocketdotio,
  SiApachecassandra,
  SiRedis,
  SiCockroachlabs,
  SiSqlite,
} from "react-icons/si";
import {
  BunJs,
  CassandraDB,
  Cloudflare,
  CSharp,
  Django,
  Flutter,
  PHP,
  Playwright,
  Redis,
  RustLight,
  Supabase,
  VisualStudioCode,
  Vitest,
} from "developer-icons";
import Image from "next/image";
import PostHog from "./icon/PostHog";
import { Database, GitBranch } from "lucide-react";
import { FaAws } from "react-icons/fa";
import Convex from "./icon/Convex";

interface Skill {
  name: string;
  icon: React.ReactElement;
  image?: string;
  level: string;
  experience: string;
}

interface ScreenProps {
  onBack: () => void;
}

const SkillScreen: React.FC<{
  title: string;
  skills: Skill[];
  onBack: () => void;
}> = ({ title, skills, onBack }) => {
  return (
    <AppScreen title={title} onBack={onBack}>
      <section className="p-4 space-y-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
            className="flex items-center gap-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
          >
            <div className="text-3xl p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
              {skill.image ? (
                <Image
                  width={32}
                  height={32}
                  src={skill.image}
                  alt={skill.name}
                />
              ) : (
                skill.icon
              )}
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg">{skill.name}</h3>
              <div className="flex items-center mt-1">
                <span className="text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-2 py-0.5 rounded-full mr-2">
                  {skill.level}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {skill.experience}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </section>
    </AppScreen>
  );
};

export const LanguagesScreen: React.FC<ScreenProps> = ({ onBack }) => {
  const skills = [
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-blue-500" />,
      level: "Advanced",
      experience: "2+ years",
      learnBy: "Doing projects",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-400" />,
      level: "Advanced",
      experience: "3+ years",
      learnBy: "Doing projects",
    },
    {
      name: "Python",
      icon: <SiPython />,
      level: "Intermediate",
      experience: "1+ years",
      learnBy: "Solving leetcode problems",
    },
    {
      name: "Rust",
      icon: <RustLight className="text-blue-800" size={32} />,
      level: "Beginner",
      experience: "Learning ",
      learnBy: "Building low-level software",
    },
    {
      name: "C# .NET",
      icon: <CSharp className="text-blue-800" size={32} />,
      level: "Intermediate",
      experience: "1+ years",
      learnBy: "College's cirriculum",
    },
    {
      name: "PHP",
      icon: <PHP className="text-blue-800" size={32} />,
      level: "Practical",
      experience: "2 months",
      learnBy: "College's cirriculum",
    },
  ];

  return (
    <AppScreen title={"Programming Languages"} onBack={onBack}>
      <section className="p-4 space-y-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
            className="flex items-center gap-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
          >
            <div className="text-3xl p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
              {skill.icon}
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg">{skill.name}</h3>
              <div className="flex items-center mt-1">
                <span className="text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-2 py-0.5 rounded-full mr-2">
                  {skill.level}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {skill.experience}
                </span>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                <span className="font-semibold">Learned by:</span>{" "}
                {skill.learnBy}
              </p>
            </div>
          </motion.div>
        ))}
      </section>
    </AppScreen>
  );
};

export const FrameworkScreen: React.FC<ScreenProps> = ({ onBack }) => {
  const skills: Skill[] = [
    {
      name: "React",
      icon: <SiReact className="text-blue-400" />,
      level: "Advanced",
      experience: "3+ years",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-black dark:text-white" />,
      level: "Advanced",
      experience: "2+ years",
    },
    {
      name: "Astro",
      icon: <SiAstro className="text-purple-500" />,
      level: "Practical",
      experience: "1 project",
    },
    {
      name: "ElectronJS",
      icon: <SiElectron className="text-blue-500" />,
      level: "Practical",
      experience: "1 project",
    },
    {
      name: "React native, Flutter & Lynx",
      icon: <Flutter size={32} className="text-blue-500" />,
      level: "Theoretical",
      experience: "Researching",
    },
  ];

  return (
    <SkillScreen title="Frontend Frameworks" skills={skills} onBack={onBack} />
  );
};

export const ServerRuntimeScreen: React.FC<ScreenProps> = ({ onBack }) => {
  const skills: Skill[] = [
    {
      name: "Node.js",
      icon: <SiNodedotjs className="text-green-600" />,
      level: "Advanced",
      experience: "3+ years",
    },
    {
      name: "Express",
      icon: <SiExpress />,
      level: "Advanced",
      experience: "3+ years",
    },

    {
      name: "Nginx",
      icon: <SiNginx />,
      level: "Intermediate",
      experience: "3+ years",
    },
    {
      name: "Rabbit MQ",
      icon: <SiRabbitmq />,
      level: "Intermediate",
      experience: "2 projects",
    },

    {
      name: "WebSockets",
      icon: <SiSocketdotio className="text-gray-500" />,
      level: "Intermediate",
      experience: "3 projects",
    },
    {
      name: "Django",
      icon: <Django size={32} />,
      level: "Intermediate",
      experience: "1 project",
    },
    {
      name: "Apache Kafka",
      icon: <SiApachekafka className="text-black" />,
      level: "Beginner",
      experience: "Researching",
    },
    {
      name: "BunJs",
      icon: <BunJs size={32} />,
      level: "Practical",
      experience: "1 year",
    },
    {
      name: "PNPM",
      icon: <SiPnpm size={32} />,
      level: "Theoretical",
      experience: "Researching",
    },
    {
      name: "Deno",
      icon: <SiDeno />,
      level: "Beginner",
      experience: "Researching",
    },
  ];

  return (
    <SkillScreen title="Backend Technologies" skills={skills} onBack={onBack} />
  );
};

export const DevsOpScreen: React.FC<ScreenProps> = ({ onBack }) => {
  const skills = [
    {
      name: "Docker",
      icon: <SiDocker className="text-blue-500" />,
      level: "Advanced",
      experience: "1+ years",
      learnBy: "Use with K8s",
    },
    {
      name: "Kubernetes",
      icon: <SiKubernetes className="text-blue-600" />,
      level: "Intermediate",
      experience: "9 months",
      learnBy: "Deploying via IAC and AWS EKS",
    },
    {
      name: "Github workflows",
      icon: <GitBranch className="text-red-500" />,
      level: "Intermediate",
      experience: "4 projects",
      learnBy: "Applying CI pipelines on git push",
    },
    {
      name: "Helm",
      icon: <SiHelm className=" " />,
      level: "Beginner",
      experience: "1 projects",
      learnBy: "Use with K8s",
    },
    {
      name: "Terraform",
      icon: <SiTerraform className="text-purple-500" />,
      level: "Practical",
      experience: "1 project",
      learnBy: "Online courses",
    },
    {
      name: "Pulumi",
      icon: <SiPulumi className=" " />,
      level: "Practical",
      experience: "1 project",
      learnBy: "Online courses",
    },
    {
      name: "Jenkins",
      icon: <SiJenkins className=" " />,
      level: "Theoretical",
      experience: "Learning",
      learnBy: "Youtube courses",
    },
    {
      name: "Ansible",
      icon: <SiAnsible className="text-yellow-500" />,
      level: "Theoretical",
      experience: "Learning",
      learnBy: "Youtube courses",
    },
  ];

  return (
    <AppScreen title={"Devs Op"} onBack={onBack}>
      <section className="p-4 space-y-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
            className="flex items-center gap-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
          >
            <div className="text-3xl p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
              {skill.icon}
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg">{skill.name}</h3>
              <div className="flex items-center mt-1">
                <span className="text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-2 py-0.5 rounded-full mr-2">
                  {skill.level}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {skill.experience}
                </span>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                <span className="font-semibold">Learned by:</span>{" "}
                {skill.learnBy}
              </p>
            </div>
          </motion.div>
        ))}
      </section>
    </AppScreen>
  );
};

export const VersioningScreen: React.FC<ScreenProps> = ({ onBack }) => {
  const skills: Skill[] = [
    {
      name: "Git",
      icon: <SiGit className="text-orange-600" />,
      level: "Advanced",
      experience: "3+ years",
    },
    {
      name: "GitHub",
      icon: <SiGithub className="text-black dark:text-white" />,
      level: "Advanced",
      experience: "3+ years",
    },
    {
      name: "GitLab & GitBucket",
      icon: <SiGitlab className="text-orange-600" />,
      level: "Theoretical",
      experience: "Learning",
    },
  ];

  return (
    <SkillScreen title="Version Control" skills={skills} onBack={onBack} />
  );
};

export const CloudComputingScreen: React.FC<ScreenProps> = ({ onBack }) => {
  const skills = [
    {
      name: "AWS",
      icon: <FaAws className="text-white" />,
      level: "Intermediate",
      experience: "1 year",
      learnBy: "Udemy Cloud Practitioner course & IaC integration",
      services: "EC2, S3, EKS, ECS, ELB...",
    },

    {
      name: "Google Cloud Platform",
      icon: <SiGooglecloud />,
      level: "Beginner",
      experience: "1 project",
      learnBy: "Neetcode's GCP related course",
      services: "Container Registry, OAuth, Google Pub/Sub",
    },
  ];

  return (
    <AppScreen title={"Cloud Computing"} onBack={onBack}>
      <section className="p-4 space-y-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
            className="flex items-center gap-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
          >
            <div className="text-3xl p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
              {skill.icon}
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg">{skill.name}</h3>
              <div className="flex items-center mt-1">
                <span className="text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-2 py-0.5 rounded-full mr-2">
                  {skill.level}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {skill.experience}
                </span>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                <span className="font-semibold">Learned by:</span>{" "}
                {skill.learnBy}
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                <span className="font-semibold">Services:</span>{" "}
                {skill.services}
              </p>
            </div>
          </motion.div>
        ))}
      </section>
    </AppScreen>
  );
};

export const DatabasesScreen: React.FC<ScreenProps> = ({ onBack }) => {
  const databaseCategories = [
    {
      category: "Vector Databases",
      databases: [
        {
          name: "Weaviate",
          icon: <Database className="text-green-500" />,
          level: "Intermediate",
          experience: "1 project",
        },
        {
          name: "pgvector (Supabase)",
          icon: <Supabase size={32} className="text-blue-600" />,
          level: "Intermediate",
          experience: "2 projects",
          BaaS: "Supabase",
        },
      ],
    },
    {
      category: "NoSQL Databases",
      databases: [
        {
          name: "MongoDB",
          icon: <SiMongodb className="text-green-500" />,
          level: "Advanced",
          experience: "3 projects",
        },
        {
          name: "Redis",
          icon: <Redis size={32} className="text-red-500" />,
          level: "Intermediate",
          experience: "1 project",
          BaaS: "Upstash Redis",
        },

        {
          name: "Convex",
          icon: <Convex />,
          level: "Intermediate",
          experience: "1 project",
        },
        {
          name: "IndexedDB",
          icon: <Database size={32} />,
          level: "Practical",
          experience: "1 project",
        },
        {
          name: "CassandraDB",
          icon: <SiApachecassandra className="text-blue-400" />,
          level: "Theoretical",
          experience: "Researching",
        },
      ],
    },
    {
      category: "Relational Databases",
      databases: [
        {
          name: "PostgreSQL",
          icon: <SiPostgresql className="text-blue-600" />,
          level: "Advanced",
          experience: "3 projects",
          BaaS: "Supabase, NeonDB, Vercel Postgres",
        },
        {
          name: "MySQL",
          icon: <SiMysql className="text-orange-500" />,
          level: "Intermediate",
          experience: "2 projects",
        },
        {
          name: "SQLite",
          icon: <SiSqlite className="text-blue-400" />,
          level: "Practical",
          experience: "1 project",
        },
        {
          name: "CockroachDB",
          icon: <SiCockroachlabs className="text-green-500" />,
          level: "Theoretical",
          experience: "Researching",
        },
        {
          name: "PlanetScale",
          icon: <SiMysql className="text-blue-600" />,
          level: "Intermediate",
          experience: "1 project",
          BaaS: "PlanetScale (Serverless MySQL)",
        },
      ],
    },
    {
      category: "Search & Indexing Engines",
      databases: [
        {
          name: "Elasticsearch",
          icon: <SiElasticsearch className="text-yellow-500" />,
          level: "Theoretical",
          experience: "Learning",
        },
      ],
    },
  ];

  return (
    <AppScreen title="Databases" onBack={onBack}>
      <section className="p-4 space-y-6">
        {databaseCategories.map(({ category, databases }) => (
          <div key={category}>
            <h2 className="text-xl font-semibold mb-2">{category}</h2>
            <div className="space-y-4">
              {databases.map((db, index) => (
                <motion.div
                  key={db.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className="flex items-center gap-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
                >
                  <div className="text-3xl p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    {db.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{db.name}</h3>
                    <div className="flex items-center mt-1">
                      <span className="text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-2 py-0.5 rounded-full mr-2">
                        {db.level}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {db.experience}
                      </span>
                    </div>
                    {db.BaaS && (
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                        <span className="font-semibold">BaaS:</span> {db.BaaS}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </AppScreen>
  );
};

export const SystemDesignScreen: React.FC<ScreenProps> = ({ onBack }) => {
  const skills: Skill[] = [
    {
      name: "Microservices",
      icon: <div className="font-bold text-xl text-purple-500">MS</div>,
      level: "Intermediate",
      experience: "1 year",
    },
    {
      name: "API Design",
      icon: <div className="font-bold text-xl text-indigo-500">API</div>,
      level: "Intermediate",
      experience: "1 year",
    },
    {
      name: "Scalable Architecture",
      icon: <div className="font-bold text-xl text-cyan-500">SA</div>,
      level: "Intermediate",
      experience: "1 year",
    },
    {
      name: "Message Queue",
      icon: <SiRabbitmq size={32} className="text-orange-400" />,
      level: "Intermediate",
      experience: "2 projects",
    },
    {
      name: "Load Balancing, Reverse Proxy & Caching",
      icon: <SiNginx size={32} className="text-green-500" />,
      level: "Intermediate",
      experience: "3 projects",
    },
    {
      name: "DB Sharding & Replication",
      icon: <Database size={32} />,
      level: "Theoretical",
      experience: "Researching",
    },
  ];

  return <SkillScreen title="System Design" skills={skills} onBack={onBack} />;
};

export const TestingScreen: React.FC<ScreenProps> = ({ onBack }) => {
  const skills: Skill[] = [
    {
      name: "Playwright",
      icon: <Playwright className="text-green-700" />,
      level: "Practical",
      experience: "1 project",
    },
    {
      name: "Jest",
      icon: <SiJest className="text-red-700" />,
      level: "Intermediate",
      experience: "3 projects",
    },
    {
      name: "Vitest",
      icon: <Vitest size={32} />,
      level: "Intermediate",
      experience: "2 projects",
    },
    {
      name: "RTL",
      icon: <SiReact size={32} />,
      level: "Intermediate",
      experience: "3 projects",
    },
    {
      name: "Cypress",
      icon: <SiCypress className="text-gray-800 dark:text-gray-200" />,
      level: "Practical",
      experience: "1 project",
    },
  ];

  return (
    <SkillScreen title="Testing Libraries" skills={skills} onBack={onBack} />
  );
};

export const DSAScreen: React.FC<ScreenProps> = ({ onBack }) => {
  const skills: { category: string; skills: Skill[] }[] = [
    {
      category: "Data Structures",
      skills: [
        {
          name: "Arrays & Hashing",
          icon: <div className="font-bold text-xl text-green-500">DS</div>,
          level: "Intermediate",
          experience: "2+ years",
        },
        {
          name: "Linked Lists",
          icon: <div className="font-bold text-xl text-green-500">DS</div>,
          level: "Intermediate",
          experience: "2+ years",
        },
        {
          name: "Stacks & Queues",
          icon: <div className="font-bold text-xl text-green-500">DS</div>,
          level: "Intermediate",
          experience: "2+ years",
        },
        {
          name: "Binary Trees & BSTs",
          icon: <div className="font-bold text-xl text-green-500">DS</div>,
          level: "Intermediate",
          experience: "2+ years",
        },
        {
          name: "Heaps / Priority Queues",
          icon: <div className="font-bold text-xl text-green-500">DS</div>,
          level: "Intermediate",
          experience: "1+ years",
        },
        {
          name: "Tries (Prefix Trees)",
          icon: <div className="font-bold text-xl text-blue-500">DS</div>,
          level: "Intermediate",
          experience: "1+ years",
        },
        {
          name: "Disjoint Set (Union-Find)",
          icon: <div className="font-bold text-xl text-purple-500">DS</div>,
          level: "Intermediate",
          experience: "2+ years",
        },
        {
          name: "Segment Tree",
          icon: <div className="font-bold text-xl text-green-500">DS</div>,
          level: "Intermediate",
          experience: "2+ years",
        },
      ],
    },
    {
      category: "Algorithms",
      skills: [
        {
          name: "Binary Search",
          icon: <div className="font-bold text-xl text-blue-500">AL</div>,
          level: "Intermediate",
          experience: "1+ years",
        },
        {
          name: "Two Pointers",
          icon: <div className="font-bold text-xl text-blue-500">AL</div>,
          level: "Intermediate",
          experience: "1+ years",
        },
        {
          name: "Sliding Window",
          icon: <div className="font-bold text-xl text-blue-500">AL</div>,
          level: "Intermediate",
          experience: "1+ years",
        },
        {
          name: "Backtracking",
          icon: <div className="font-bold text-xl text-blue-500">AL</div>,
          level: "Intermediate",
          experience: "1+ years",
        },
        {
          name: "Kadane's Algorithm",
          icon: <div className="font-bold text-xl text-purple-500">AL</div>,
          level: "Intermediate",
          experience: "2+ years",
        },
        {
          name: "Merge Intervals",
          icon: <div className="font-bold text-xl text-blue-500">AL</div>,
          level: "Intermediate",
          experience: "2+ years",
        },
      ],
    },
    {
      category: "Graph Algorithms",
      skills: [
        {
          name: "Depth First Search (DFS)",
          icon: <div className="font-bold text-xl text-orange-500">Graph</div>,
          level: "Intermediate",
          experience: "1+ years",
        },
        {
          name: "Breadth First Search (BFS)",
          icon: <div className="font-bold text-xl text-orange-500">Graph</div>,
          level: "Intermediate",
          experience: "1+ years",
        },
        {
          name: "Dijkstra’s Algorithm",
          icon: <div className="font-bold text-xl text-orange-500">Graph</div>,
          level: "Intermediate",
          experience: "2+ years",
        },
        {
          name: "Topological Sorting",
          icon: <div className="font-bold text-xl text-orange-500">Graph</div>,
          level: "Intermediate",
          experience: "2+ years",
        },
      ],
    },
    {
      category: "Dynamic Programming",
      skills: [
        {
          name: "1D DP",
          icon: <div className="font-bold text-xl text-purple-500">DP</div>,
          level: "Intermediate",
          experience: "1+ years",
        },
        {
          name: "2D DP",
          icon: <div className="font-bold text-xl text-purple-500">DP</div>,
          level: "Intermediate",
          experience: "2+ years",
        },
        {
          name: "Bitmask DP",
          icon: <div className="font-bold text-xl text-purple-500">DP</div>,
          level: "Beginner",
          experience: "1 year",
        },
      ],
    },
    {
      category: "Greedy Algorithms",
      skills: [
        {
          name: "Greedy Approach",
          icon: <div className="font-bold text-xl text-yellow-500">Greedy</div>,
          level: "Beginner",
          experience: "1+ years",
        },
      ],
    },
    {
      category: "Bit Manipulation",
      skills: [
        {
          name: "Bitwise Operations",
          icon: <div className="font-bold text-xl text-red-500">Bit</div>,
          level: "Beginner",
          experience: "1 year",
        },
      ],
    },
  ];

  return (
    <AppScreen title="DSA Skills" onBack={onBack}>
      <section className="p-4 space-y-6">
        {skills.map((category) => (
          <div key={category.category}>
            <h2 className="text-xl font-bold mb-2 text-gray-700 dark:text-gray-300">
              {category.category}
            </h2>
            <div className="space-y-4">
              {category.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className="flex items-center gap-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
                >
                  <div className="text-3xl p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    {skill.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{skill.name}</h3>
                    <div className="flex items-center mt-1">
                      <span className="text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-2 py-0.5 rounded-full mr-2">
                        {skill.level}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.experience}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </AppScreen>
  );
};

export const AnalyticsScreen: React.FC<ScreenProps> = ({ onBack }) => {
  const analyticsSkills: Skill[] = [
    {
      name: "Post Hog",
      icon: <PostHog />,
      level: "Beginner",
      experience: "1 project",
    },
    {
      name: "Grafana",
      icon: <SiGrafana className="text-orange-500" />,
      level: "Theoretical",
      experience: "Learning",
    },
    {
      name: "Prometheus",
      icon: <SiPrometheus className="text-orange-600" />,
      level: "Theoretical",
      experience: "Learning",
    },
    {
      name: "Sentry",
      icon: <SiSentry className="text-orange-600" />,
      level: "Theoretical",
      experience: "Learning",
    },
  ];

  const otherTools: Skill[] = [
    {
      name: "Pino",
      icon: <SiExpress className="text-green-600" />,
      level: "Intermediate",
      experience: "2 projects",
    },
    {
      name: "Morgan",
      icon: <SiExpress className="text-red-600" />,
      level: "Intermediate",
      experience: "3 projects",
    },
  ];

  return (
    <AppScreen title={"Analytics and Monitoring"} onBack={onBack}>
      <section className="p-4 space-y-6">
        <div className="space-y-4">
          {analyticsSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              className="flex items-center gap-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
            >
              <div className="text-3xl p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
                {skill.image ? (
                  <Image
                    width={32}
                    height={32}
                    src={skill.image}
                    alt={skill.name}
                  />
                ) : (
                  skill.icon
                )}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
                <div className="flex items-center mt-1">
                  <span className="text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-2 py-0.5 rounded-full mr-2">
                    {skill.level}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {skill.experience}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div>
          <h2 className="font-bold text-xl mb-3 px-1">Other Logging Tools</h2>
          <div className="space-y-4">
            {otherTools.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: (index + analyticsSkills.length) * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                className="flex items-center gap-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
              >
                <div className="text-3xl p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  {skill.image ? (
                    <Image
                      width={32}
                      height={32}
                      src={skill.image}
                      alt={skill.name}
                    />
                  ) : (
                    skill.icon
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                  <div className="flex items-center mt-1">
                    <span className="text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-2 py-0.5 rounded-full mr-2">
                      {skill.level}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {skill.experience}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </AppScreen>
  );
};

export const IDEScreen: React.FC<ScreenProps> = ({ onBack }) => {
  const skills: Skill[] = [
    {
      name: "VS Code",
      icon: <VisualStudioCode size={32} className="text-blue-500" />,
      level: "Advanced",
      experience: "3+ years",
    },
    {
      name: "Cursor",
      icon: <VisualStudioCode className="text-blue-500" />,
      image: "/cursor.png",
      level: "Advanced",
      experience: "2+ years",
    },
    {
      name: "Visual Studio 2022",
      icon: <VisualStudioCode size={32} className="text-blue-500" />,
      image: "/vs-2022.png",
      level: "Intermediate",
      experience: "1+ years",
    },
    {
      name: "Neovim",
      icon: <SiNeovim className="text-green-600" />,
      level: "Beginner",
      experience: "Learning",
    },
  ];

  return <SkillScreen title="IDEs & Editors" skills={skills} onBack={onBack} />;
};
