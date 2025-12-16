import { Question } from '../types'

export const mockQuestions: Question[] = [
  {
    id: '1',
    questionText: 'What is the capital of France?',
    timestamp: '2024-01-15T10:30:00Z',
    responseTime: 245,
    userId: 'user-001',
    userName: 'Alice Johnson',
    fullResponse: 'The capital of France is Paris. Paris is located in the north-central part of the country and is known for its rich history, art, culture, and iconic landmarks such as the Eiffel Tower, the Louvre Museum, and Notre-Dame Cathedral.'
  },
  {
    id: '2',
    questionText: 'How does photosynthesis work?',
    timestamp: '2024-01-15T11:15:00Z',
    responseTime: 892,
    userId: 'user-002',
    userName: 'Bob Smith',
    fullResponse: 'Photosynthesis is the process by which plants, algae, and some bacteria convert light energy into chemical energy stored in glucose molecules. The process occurs in two main stages: the light-dependent reactions and the light-independent reactions (Calvin cycle). During light-dependent reactions, chlorophyll absorbs light energy and uses it to split water molecules, releasing oxygen and producing ATP and NADPH. In the Calvin cycle, these energy carriers are used to convert carbon dioxide into glucose.'
  },
  {
    id: '3',
    questionText: 'Explain quantum computing basics',
    timestamp: '2024-01-15T12:00:00Z',
    responseTime: 1234,
    userId: 'user-003',
    userName: 'Carol Williams',
    fullResponse: 'Quantum computing leverages quantum mechanical phenomena such as superposition and entanglement to perform computations. Unlike classical bits that exist in either 0 or 1 states, quantum bits (qubits) can exist in a superposition of both states simultaneously. This allows quantum computers to process vast amounts of information in parallel. Key concepts include quantum gates, quantum circuits, and quantum algorithms like Shor\'s algorithm and Grover\'s algorithm. However, quantum computers are highly sensitive to environmental interference, requiring extreme cooling and isolation.'
  },
  {
    id: '4',
    questionText: 'What are the best practices for React performance optimization?',
    timestamp: '2024-01-15T13:45:00Z',
    responseTime: 567,
    userId: 'user-004',
    userName: 'David Brown',
    fullResponse: 'React performance optimization best practices include: 1) Using React.memo() to prevent unnecessary re-renders of functional components, 2) Implementing useMemo() and useCallback() hooks to memoize expensive calculations and functions, 3) Code splitting with React.lazy() and Suspense to reduce initial bundle size, 4) Virtualizing long lists using libraries like react-window, 5) Optimizing images and assets, 6) Avoiding inline object and function creation in render methods, 7) Using keys properly in lists, 8) Profiling with React DevTools to identify bottlenecks, and 9) Considering state management libraries like Redux or Zustand for complex state logic.'
  },
  {
    id: '5',
    questionText: 'How do I make a perfect cup of coffee?',
    timestamp: '2024-01-15T14:20:00Z',
    responseTime: 312,
    userId: 'user-005',
    userName: 'Emma Davis',
    fullResponse: 'To make a perfect cup of coffee: 1) Start with high-quality, freshly roasted beans, 2) Grind beans just before brewing (coarse for French press, medium for drip, fine for espresso), 3) Use the right water temperature (195-205°F or 90-96°C), 4) Maintain proper coffee-to-water ratio (typically 1:15 to 1:17), 5) Ensure even extraction by proper brewing time (4 minutes for French press, 2-3 minutes for pour-over), 6) Use filtered water for better taste, and 7) Store beans in an airtight container away from light, heat, and moisture. Experiment with different methods like pour-over, French press, or AeroPress to find your preference.'
  },
  {
    id: '6',
    questionText: 'What is machine learning?',
    timestamp: '2024-01-15T15:10:00Z',
    responseTime: 678,
    userId: 'user-006',
    userName: 'Frank Miller',
    fullResponse: 'Machine learning is a subset of artificial intelligence that enables computers to learn and make decisions from data without being explicitly programmed for every task. It involves algorithms that can identify patterns in data and make predictions or classifications. There are three main types: supervised learning (learning from labeled data), unsupervised learning (finding patterns in unlabeled data), and reinforcement learning (learning through trial and error with rewards). Common applications include image recognition, natural language processing, recommendation systems, and predictive analytics. Popular frameworks include TensorFlow, PyTorch, and Scikit-learn.'
  },
  {
    id: '7',
    questionText: 'What is the difference between REST and GraphQL?',
    timestamp: '2024-01-15T16:00:00Z',
    responseTime: 445,
    userId: 'user-007',
    userName: 'Grace Wilson',
    fullResponse: 'REST (Representational State Transfer) and GraphQL are both API design approaches with key differences: REST uses multiple endpoints for different resources, while GraphQL uses a single endpoint. REST returns fixed data structures, whereas GraphQL allows clients to specify exactly what data they need. REST can lead to over-fetching or under-fetching data, while GraphQL solves this by letting clients request only needed fields. REST uses standard HTTP methods (GET, POST, PUT, DELETE), while GraphQL uses queries and mutations. REST is simpler and more cacheable, while GraphQL provides more flexibility but can be more complex. REST is better for simple CRUD operations, while GraphQL excels when clients need varied data requirements.'
  },
  {
    id: '8',
    questionText: 'How does the human brain process memory?',
    timestamp: '2024-01-15T17:30:00Z',
    responseTime: 1123,
    userId: 'user-008',
    userName: 'Henry Taylor',
    fullResponse: 'Memory processing in the human brain involves three main stages: encoding (converting information into a form that can be stored), storage (maintaining information over time), and retrieval (accessing stored information). The hippocampus plays a crucial role in forming new memories, while the cortex stores long-term memories. There are different types of memory: sensory memory (brief retention of sensory information), short-term memory (temporary storage, ~20-30 seconds), and long-term memory (permanent storage). Long-term memory is further divided into explicit (declarative) memory (facts and events) and implicit (procedural) memory (skills and habits). Memory consolidation involves strengthening neural connections through repeated activation, and sleep plays an important role in this process.'
  },
  {
    id: '9',
    questionText: 'What are the principles of good UI/UX design?',
    timestamp: '2024-01-15T18:15:00Z',
    responseTime: 789,
    userId: 'user-009',
    userName: 'Iris Martinez',
    fullResponse: 'Key principles of good UI/UX design include: 1) User-centered design - prioritize user needs and goals, 2) Consistency - maintain visual and functional consistency across the interface, 3) Simplicity - reduce cognitive load by eliminating unnecessary elements, 4) Feedback - provide clear feedback for user actions, 5) Accessibility - ensure the design is usable by people with disabilities, 6) Visual hierarchy - guide users\' attention through size, color, and spacing, 7) Error prevention and recovery - design to prevent errors and provide easy recovery, 8) Flexibility and efficiency - accommodate both novice and expert users, 9) Aesthetic and minimalist design - avoid unnecessary visual clutter, and 10) Recognition over recall - make actions and options visible rather than requiring users to remember them.'
  },
  {
    id: '10',
    questionText: 'Explain the water cycle',
    timestamp: '2024-01-15T19:00:00Z',
    responseTime: 423,
    userId: 'user-010',
    userName: 'Jack Anderson',
    fullResponse: 'The water cycle, also known as the hydrologic cycle, describes the continuous movement of water on, above, and below Earth\'s surface. The main processes include: 1) Evaporation - water from oceans, lakes, and rivers turns into water vapor due to solar energy, 2) Transpiration - plants release water vapor through their leaves, 3) Condensation - water vapor cools and forms clouds, 4) Precipitation - water falls from clouds as rain, snow, sleet, or hail, 5) Infiltration - water soaks into the ground, 6) Runoff - water flows over land into rivers and eventually back to oceans. This cycle is driven by solar energy and gravity, and it\'s essential for distributing water across the planet and maintaining life.'
  },
  {
    id: '11',
    questionText: 'What is blockchain technology?',
    timestamp: '2024-01-16T09:00:00Z',
    responseTime: 956,
    userId: 'user-011',
    userName: 'Karen Lee',
    fullResponse: 'Blockchain is a distributed ledger technology that maintains a continuously growing list of records (blocks) that are linked and secured using cryptography. Each block contains a cryptographic hash of the previous block, a timestamp, and transaction data. Key features include decentralization (no central authority), immutability (records cannot be altered retroactively), transparency (all participants can view transactions), and security (cryptographic hashing and consensus mechanisms). Blockchain is the underlying technology behind cryptocurrencies like Bitcoin, but it has applications beyond finance including supply chain management, voting systems, digital identity, and smart contracts. Consensus mechanisms like Proof of Work and Proof of Stake ensure network integrity.'
  },
  {
    id: '12',
    questionText: 'How do I learn a new programming language effectively?',
    timestamp: '2024-01-16T10:30:00Z',
    responseTime: 634,
    userId: 'user-012',
    userName: 'Liam Thompson',
    fullResponse: 'To learn a new programming language effectively: 1) Start with fundamentals - understand basic syntax, data types, and control structures, 2) Practice regularly - code daily, even if just for 30 minutes, 3) Build projects - apply what you learn by creating real applications, 4) Read documentation - familiarize yourself with official language documentation, 5) Join communities - participate in forums, GitHub, and coding communities, 6) Read code - study open-source projects written in the language, 7) Solve problems - use platforms like LeetCode, HackerRank, or Codewars, 8) Teach others - explaining concepts helps solidify understanding, 9) Don\'t try to memorize everything - focus on understanding concepts and patterns, and 10) Be patient - learning takes time, so stay consistent and don\'t get discouraged.'
  }
]

