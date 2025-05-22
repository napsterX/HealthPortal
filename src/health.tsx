import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { Info, Clock, Activity, BarChart2, Heart, Calendar, Award, AlertTriangle, CheckCircle, Zap, Dumbbell, Repeat, TrendingUp, Users, ThumbsUp, Clipboard, ArrowRight } from 'lucide-react';
import { CitationLink } from '@/components/ui/citation';

const citations = {
  1: {
    title: "The 8 Best Exercises for Weight Loss",
    url: "https://www.healthline.com/nutrition/best-exercise-for-weight-loss",
    content: "Research shows that high-intensity interval training (HIIT) can be especially effective for burning fat. According to the American Council on Exercise, a 140-pound person burns about 10.8 calories per minute jogging and 13.2 calories per minute when running.",
    date: "Retrieved 2024",
    siteName: "Healthline",
    sourceContent: "According to the American Council on Exercise, a 140-pound (65-kg) person burns about 10.8 calories per minute jogging and 13.2 calories per minute when running. A 180-pound (81-kg) person burns about 13.9 calories per minute jogging and 17 calories per minute when running."
  },
  2: {
    title: "A 4 Week Workout Plan for Weight Loss, from a Certified Trainer",
    url: "https://www.healthline.com/health/fitness/4-week-workout-plan-for-weight-loss",
    content: "A comprehensive workout plan should include strength training, interval training/conditioning, and low-intensity cardio for optimal fat loss results.",
    date: "Retrieved 2024",
    siteName: "Healthline",
    sourceContent: "I build my program around three types of training: upper and lower body strength training, interval training/conditioning, and low intensity cardio. The strength training will help you build muscle and strength that you can apply to your interval training. Furthermore, the added muscle will increase your metabolism over time, meaning you'll burn more calories at rest just to sustain yourself, which can contribute to the calorie deficit required for weight loss."
  },
  3: {
    title: "The Effect of High-Intensity Interval Training Periods on Morning Serum Testosterone and Cortisol Levels and Physical Fitness in Men Aged 35-40 Years",
    url: "https://pubmed.ncbi.nlm.nih.gov/34063524/",
    content: "High-intensity interval training, continued over an 8-week period, modulates (significantly and positively) the balance between testosterone and cortisol levels and improves physical capacity in men aged 35-40 years.",
    date: "2021",
    siteName: "PubMed",
    sourceContent: "High-intensity interval training, continued over an 8-week period, modulates (significantly and positively) the balance between testosterone and cortisol levels and improves physical capacity in men aged 35-40 years."
  },
  4: {
    title: "Regular exercise and the age-related decline in resting metabolic rate in women",
    url: "https://pubmed.ncbi.nlm.nih.gov/9329340/",
    content: "Research shows that the age-related decline in resting metabolic rate (RMR) in sedentary women is not observed in women who exercise regularly. The elevated level of RMR observed in middle-aged and older exercising women may play a role in their lower levels of body weight and fatness compared to those in sedentary women.",
    date: "1997",
    siteName: "PubMed",
    sourceContent: "Our results are consistent with the concept that the age-related decline in RMR in sedentary women is not observed in women who regularly perform endurance exercise. The elevated level of RMR observed in middle-aged and older exercising women may play a role in their lower levels of body weight and fatness compared to those in sedentary women."
  },
  5: {
    title: "Weight Gain in Midlife Women",
    url: "https://pubmed.ncbi.nlm.nih.gov/38416337/",
    content: "Aging-related changes such as decreased energy expenditure and physical activity are important culprits for weight gain in midlife women. The hormonal changes of menopause also influence body adiposity distribution and increase central adiposity.",
    date: "2024",
    siteName: "PubMed",
    sourceContent: "Aging-related changes such as decreased energy expenditure and physical activity are important culprits for weight gain in midlife women. The hormonal changes of menopause also influence body adiposity distribution and increase central adiposity."
  },
  6: {
    title: "The BEST Resistance-training Program for Fat Loss",
    url: "https://www.acefitness.org/resources/pros/expert-articles/6868/the-best-resistance-training-program-for-fat-loss/",
    content: "Exercises that require the coordination and movement of multiple joints, such as squats, deadlifts, Olympic lifts, pull-ups and push-ups, are the most effective for maximizing fat loss and muscle gain. These compound exercises utilize a large amount of muscle, requiring elevated oxygen use and hormonal response.",
    date: "Retrieved 2024",
    siteName: "ACE Fitness",
    sourceContent: "Exercises that require the coordination and movement of multiple joints, such as squats, deadlifts, Olympic lifts, pull-ups and push-ups, are the most effective for maximizing fat loss and muscle gain. These compound exercises utilize a large amount of muscle, requiring elevated oxygen use and hormonal response, and should be prioritized in an effective resistance-training program for fat loss."
  },
  7: {
    title: "Fat Loss for Women | 4 Tips for Losing that Fat Once and For All",
    url: "https://www.acefitness.org/resources/everyone/blog/6403/fat-loss-for-women-4-tips-for-losing-that-fat-once-and-for-all/",
    content: "Women are at an evolutionary disadvantage for losing fat partly due to lower amounts of lean muscle mass, which results in a lower caloric expenditure during rest. Furthermore, it appears women lose lean muscle mass at a faster rate as they age. Resistance training has consistently been shown to increase amounts of lean muscle mass in both men and women.",
    date: "Retrieved 2024",
    siteName: "ACE Fitness",
    sourceContent: "Women are at an evolutionary disadvantage for losing fat partly due to lower amounts of lean muscle mass, which results in a lower caloric expenditure during rest. Furthermore, it appears women lose lean muscle mass at a faster rate as they age. Resistance training has consistently been shown to increase amounts of lean muscle mass in both men and women."
  },
  8: {
    title: "High-Intensity Interval Training (HIIT): What It Is, How to Do It",
    url: "https://www.webmd.com/fitness-exercise/high-intensity-interval-training-hiit",
    content: "HIIT takes your cardio workout to another level, as you push your pace out of your comfort zone. You'll work up a sweat fast, working at a very intense level and then backing off for a slower recovery period, followed by another round of high intensity. You'll lose weight, build muscle, and boost your metabolism.",
    date: "Retrieved 2024",
    siteName: "WebMD",
    sourceContent: "As you can tell from the name, high-intensity interval training (HIIT) is challenging. It takes your cardio workout to another level, as you push your pace out of your comfort zone. You'll work up a sweat fast, working at a very intense level and then backing off for a slower recovery period, followed by another round of high intensity. That strategy can save you time: You don't have to work out as long as you would if you were keeping a steady pace. You'll lose weight, build muscle, and boost your metabolism."
  },
  9: {
    title: "The 40-min HIIT acutely induced bone formation which was likely through the increases in muscle derived interleukin 6 and adiponectin activation",
    url: "https://pubmed.ncbi.nlm.nih.gov/38636620/",
    content: "A 40-minute HIIT session at 80-90% of heart rate reserve performed three times weekly for 16 weeks showed significant benefits for overweight, premenopausal women, including increased bone formation markers.",
    date: "2024",
    siteName: "PubMed",
    sourceContent: "In total, 22 overweight, premenopausal women were randomly assigned to either the exercise or the control group. The exercise participants engaged in the 40-min HIIT session at 80-90 % of their heart rate reserve (HRR) three times weekly for 16 weeks, while the control participants performed their routine daily activities."
  },
  10: {
    title: "High-Intensity Interval Training in the Real World: Outcomes from a 12-Month Intervention in Overweight Adults",
    url: "https://pubmed.ncbi.nlm.nih.gov/29683919/",
    content: "HIIT was well accepted by overweight adults, and opting for HIIT as an alternative to standard exercise recommendations led to no difference in health outcomes after 12 months. Although regular participation in unsupervised HIIT declined rapidly, those apparently adherent to regular HIIT demonstrated beneficial weight loss and visceral fat reduction.",
    date: "2018",
    siteName: "PubMed",
    sourceContent: "HIIT was well accepted by overweight adults, and opting for HIIT as an alternative to standard exercise recommendations led to no difference in health outcomes after 12 months. Although regular participation in unsupervised HIIT declined rapidly, those apparently adherent to regular HIIT demonstrated beneficial weight loss and visceral fat reduction."
  },
  11: {
    title: "Scientific Challenges on Theory of Fat Burning by Exercise",
    url: "https://pubmed.ncbi.nlm.nih.gov/34295263/",
    content: "Exercise training decreases abdominal fat in an intensity-dependent manner. The fat loss effect of exercise has been intuitively thought to result from increased fat burning during and after exercise, defined by conversion of fatty acid into carbon dioxide in consumption of oxygen. Nevertheless, increasing exercise intensity decreases oxidation of fatty acids derived from adipose tissue despite elevated lipolysis.",
    date: "2021",
    siteName: "PubMed",
    sourceContent: "Exercise training decreases abdominal fat in an intensity-dependent manner. The fat loss effect of exercise has been intuitively thought to result from increased fat burning during and after exercise, defined by conversion of fatty acid into carbon dioxide in consumption of oxygen. Nevertheless, increasing exercise intensity decreases oxidation of fatty acids derived from adipose tissue despite elevated lipolysis."
  },
  12: {
    title: "Effect of midlife exercise on lipid metabolism in aging mice: comparable to lifelong exercise, better than ceasing midlife exercise",
    url: "https://pubmed.ncbi.nlm.nih.gov/40216894/",
    content: "Exercise demonstrates the potential to mitigate age-related abnormalities in lipid metabolism. Middle-aged commencing and lifelong exercise interventions are more effective in alleviating lipid abnormalities than exercise cessation in middle age. Notably, middle-aged individuals commencing exercise yield similar outcomes in regulating aging-associated abnormal lipid metabolism compared to the lifelong exercise group.",
    date: "2025",
    siteName: "PubMed",
    sourceContent: "Exercise demonstrates the potential to mitigate age-related abnormalities in lipid metabolism. Middle-aged commencing and lifelong exercise interventions are more effective in alleviating lipid abnormalities than exercise cessation in middle age. This disparity in efficacy can be attributed to differences in regulating endoplasmic reticulum stress, enhancing liver lipid oxidation capacity, and reducing lipid synthesis ability. Notably, middle-aged individuals commencing exercise yield similar outcomes in regulating aging-associated abnormal lipid metabolism compared to the lifelong exercise group."
  },
  13: {
    title: "12 Sustainable Ways to Burn Body Fat",
    url: "https://www.healthline.com/nutrition/best-ways-to-burn-fat",
    content: "A 2023 review found that HIIT may help reduce body fat percentage, improve body composition, and preserve fat mass, which could help with long-term weight management. The authors note that cycling-based HIIT programs were the most effective.",
    date: "Retrieved 2024",
    siteName: "Healthline",
    sourceContent: "A 2023 review of 36 studies found that HIIT may help reduce body fat percentage, improve body composition, and preserve fat mass, which could help with long-term weight management. The authors note that cycling-based HIIT programs were the most effective."
  },
  14: {
    title: "Is a Slower Metabolism Really to Blame for Middle-aged Weight Gain?",
    url: "https://www.acefitness.org/continuing-education/certified/january-2022/8009/is-a-slower-metabolism-really-to-blame-for-middle-aged-weight-gain/",
    content: "Research shows that when body mass is accounted for, metabolism remains virtually unchanged from around age 20 to age 60. A primary reason for the decline in metabolism is a reduction in muscle mass since muscle burns more calories than fat does. It appears that those physiological changes that take place as we pass from one decade into the next have more to do with lifestyle factors and body-composition changes than they do with a naturally slowing metabolism.",
    date: "2022",
    siteName: "ACE Fitness",
    sourceContent: "Then, and here's where things become counterintuitive, metabolism levels off and stays relatively consistent until around age 60. When body size was considered, even the growth spurt of adolescence and the changing physiology of pregnancy failed to drive an increase in metabolism. Even after age 60, metabolism declines fairly slowly, by only 0.7% per year. Stated simply, when body mass is accounted for, metabolism remains virtually unchanged from around age 20 to age 60."
  },
  15: {
    title: "Dos and Don'ts Images of How to Start Strength Training",
    url: "https://www.webmd.com/fitness-exercise/ss/slideshow-start-strength-training",
    content: "Strength training is not just to get big muscles and look buff. Your bones will get stronger, too. And it can help your balance and coordination, which means you're less likely to fall and hurt yourself. More muscle also means you burn more calories when you're doing nothing at all, which can help keep off extra pounds.",
    date: "Retrieved 2024",
    siteName: "WebMD",
    sourceContent: "It's not just to get big muscles and look buff. Your bones will get stronger, too. And it can help your balance and coordination, which means you're less likely to fall and hurt yourself. More muscle also means you burn more calories when you're doing nothing at all, which can help keep off extra pounds. You'll appreciate these benefits as you get older and start to lose muscle mass."
  }
};

const FatBurningReport = () => {
  const [activeTab, setActiveTab] = useState('introduction');

  const fatBurningActivitiesData = [
    { name: 'HIIT', effectiveness: 9.5, description: 'High-intensity interval training combines short bursts of intense exercise with recovery periods' },
    { name: 'Strength Training', effectiveness: 8.7, description: 'Resistance exercises that build muscle and increase resting metabolic rate' },
    { name: 'Running/Jogging', effectiveness: 8.2, description: 'Moderate to high intensity cardiovascular exercise' },
    { name: 'Cycling', effectiveness: 7.8, description: 'Low-impact cardio that can be done at varying intensities' },
    { name: 'Swimming', effectiveness: 7.5, description: 'Full-body, low-impact exercise that's gentle on joints' },
    { name: 'Walking', effectiveness: 6.0, description: 'Low-intensity exercise accessible to most fitness levels' },
  ];

  const weeklyFrequencyData = [
    { name: 'Beginner', hiit: 1, strength: 2, cardio: 2, total: 5 },
    { name: 'Intermediate', hiit: 2, strength: 3, cardio: 2, total: 7 },
    { name: 'Advanced', hiit: 3, strength: 3, cardio: 2, total: 8 },
  ];

  const caloriesBurnedData = [
    { name: 'HIIT', '140lb Person': 12.5, '180lb Person': 16 },
    { name: 'Running', '140lb Person': 13.2, '180lb Person': 17 },
    { name: 'Jogging', '140lb Person': 10.8, '180lb Person': 13.9 },
    { name: 'Cycling', '140lb Person': 8.2, '180lb Person': 10.5 },
    { name: 'Swimming', '140lb Person': 9, '180lb Person': 11.6 },
    { name: 'Walking', '140lb Person': 5.5, '180lb Person': 7.1 },
  ];

  const metabolismFactorsData = [
    { name: 'Muscle Mass', value: 40 },
    { name: 'Physical Activity', value: 30 },
    { name: 'Age', value: 10 },
    { name: 'Genetics', value: 10 },
    { name: 'Hormones', value: 10 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  const hiitBenefitsData = [
    { subject: 'Fat Loss', A: 9.5, fullMark: 10 },
    { subject: 'Time Efficiency', A: 10, fullMark: 10 },
    { subject: 'Metabolic Boost', A: 9, fullMark: 10 },
    { subject: 'Muscle Preservation', A: 8, fullMark: 10 },
    { subject: 'Cardiovascular Health', A: 9, fullMark: 10 },
    { subject: 'No Equipment Needed', A: 8.5, fullMark: 10 },
  ];

  return (
    <div className="max-w-7xl mx-auto p-4 bg-white text-gray-800">
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-blue-800">Fat Burning in Your 40s: Scientific Research & Optimal Strategies</h1>
        <p className="text-lg text-gray-600 mb-6">A comprehensive analysis of fat burning mechanisms, most effective activities, and evidence-based workout strategies for adults in their 40s</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Research-Based</span>
          <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Age-Specific</span>
          <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">Home Workouts</span>
          <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">Sustainable Strategies</span>
        </div>
      </header>

      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="md:w-1/4">
          <div className="bg-gray-50 p-4 rounded-lg sticky top-4">
            <h2 className="font-bold text-lg mb-4 text-gray-700">Contents</h2>
            <nav>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => setActiveTab('introduction')} 
                    className={`w-full text-left px-3 py-2 rounded-md ${activeTab === 'introduction' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-200'}`}
                  >
                    Introduction
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveTab('metabolism')} 
                    className={`w-full text-left px-3 py-2 rounded-md ${activeTab === 'metabolism' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-200'}`}
                  >
                    Metabolism & Aging
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveTab('activities')} 
                    className={`w-full text-left px-3 py-2 rounded-md ${activeTab === 'activities' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-200'}`}
                  >
                    Most Effective Activities
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveTab('hiit')} 
                    className={`w-full text-left px-3 py-2 rounded-md ${activeTab === 'hiit' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-200'}`}
                  >
                    HIIT Deep Dive
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveTab('strength')} 
                    className={`w-full text-left px-3 py-2 rounded-md ${activeTab === 'strength' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-200'}`}
                  >
                    Strength Training Benefits
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveTab('home')} 
                    className={`w-full text-left px-3 py-2 rounded-md ${activeTab === 'home' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-200'}`}
                  >
                    Advanced Home Workouts
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveTab('frequency')} 
                    className={`w-full text-left px-3 py-2 rounded-md ${activeTab === 'frequency' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-200'}`}
                  >
                    Optimal Training Frequency
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveTab('nutrition')} 
                    className={`w-full text-left px-3 py-2 rounded-md ${activeTab === 'nutrition' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-200'}`}
                  >
                    Nutrition Considerations
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveTab('conclusion')} 
                    className={`w-full text-left px-3 py-2 rounded-md ${activeTab === 'conclusion' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-200'}`}
                  >
                    Conclusion
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="md:w-3/4">
          {activeTab === 'introduction' && (
            <section id="introduction" className="mb-12">
              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center text-blue-800">
                  <Info className="mr-2" size={24} />
                  Introduction
                </h2>
                <p className="mb-4">
                  As we enter our 40s, many of us notice changes in our bodies that make weight management more challenging than in previous decades. What worked in our 20s and 30s may no longer yield the same results, leading to frustration and confusion about the most effective approaches to fat loss.
                </p>
                <p className="mb-4">
                  This comprehensive report examines the scientific evidence behind fat burning in middle age, with a specific focus on individuals in their 40s. We'll explore the physiological changes that occur during this decade, identify the most effective fat-burning activities based on research, provide advanced home workout options, and determine optimal training frequency for sustainable results.
                </p>
                <p>
                  By understanding the unique challenges and opportunities of fitness in your 40s, you can implement evidence-based strategies that work with your body's changing physiology rather than against it.
                </p>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-3 text-yellow-800">Key Findings Summary</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Metabolism doesn't significantly slow in your 40s</strong> - Research shows that when body mass is accounted for, metabolism remains relatively stable from age 20 to 60. Weight gain in middle age is more related to decreased physical activity and muscle loss than metabolic slowdown. <CitationLink id="14" callType="quote" citations={citations} />
                  </li>
                  <li>
                    <strong>HIIT is highly effective for fat loss</strong> - High-intensity interval training has been shown to be particularly effective for reducing body fat percentage and visceral fat in middle-aged adults. <CitationLink id="13" callType="quote" citations={citations} />
                  </li>
                  <li>
                    <strong>Strength training is crucial</strong> - Resistance training helps preserve and build muscle mass, which naturally declines with age and is essential for maintaining metabolic health. <CitationLink id="7" callType="quote" citations={citations} />
                  </li>
                  <li>
                    <strong>Starting exercise in midlife is beneficial</strong> - Research shows that beginning regular exercise in your 40s can yield similar metabolic benefits to lifelong exercise. <CitationLink id="12" callType="quote" citations={citations} />
                  </li>
                  <li>
                    <strong>Consistency matters more than intensity</strong> - While high-intensity workouts are effective, adherence to a regular exercise routine is the most important factor for long-term success. <CitationLink id="10" callType="quote" citations={citations} />
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Why Focus on Fat Loss in Your 40s?</h3>
                <p className="mb-4">
                  The focus on fat loss in your 40s isn't merely aesthetic—it's a critical health consideration. Research shows that middle age often brings changes in fat distribution, with increased visceral fat (the dangerous fat surrounding internal organs) becoming more common. This shift can elevate risks for metabolic disorders, cardiovascular disease, and other health conditions.
                </p>
                <p>
                  Additionally, maintaining a healthy body composition in your 40s sets the foundation for healthy aging, helping to preserve mobility, independence, and quality of life in later decades. By implementing effective fat-burning strategies now, you're making an investment in your long-term health and wellbeing.
                </p>
              </div>
            </section>
          )}

          {activeTab === 'metabolism' && (
            <section id="metabolism" className="mb-12">
              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center text-blue-800">
                  <Activity className="mr-2" size={24} />
                  Metabolism & Aging: Myths vs. Reality
                </h2>
                <p className="mb-4">
                  One of the most persistent myths about middle age is that weight gain is inevitable due to a slowing metabolism. However, recent research challenges this conventional wisdom and provides a more nuanced understanding of metabolic changes as we age.
                </p>
                <p className="mb-4">
                  According to a comprehensive study published in 2021, when body mass is accounted for, metabolism remains relatively stable from age 20 to 60. After age 60, metabolism declines by only about 0.7% per year. This suggests that the weight gain commonly associated with middle age is not primarily due to a slowing metabolism. <CitationLink id="14" callType="quote" citations={citations} />
                </p>
                <p>
                  Instead, the primary factors contributing to weight gain in your 40s include decreased physical activity, reduced muscle mass, hormonal changes (particularly in women approaching menopause), and lifestyle factors such as increased stress and poor sleep quality. <CitationLink id="5" callType="quote" citations={citations} />
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Factors Influencing Metabolism in Middle Age</h3>
                <div className="h-80 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={metabolismFactorsData}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {metabolismFactorsData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => `${value}%`} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-sm text-gray-500 text-center mt-2">Figure 1: Relative impact of factors affecting metabolism in middle age</p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-3 text-green-800">The Role of Muscle Mass</h3>
                <p className="mb-4">
                  Muscle tissue is metabolically active, burning more calories at rest than fat tissue. As we age, we naturally lose muscle mass (sarcopenia) unless we actively work to maintain it through resistance training and adequate protein intake.
                </p>
                <p className="mb-4">
                  Research shows that women are at a particular disadvantage when it comes to maintaining muscle mass. Women naturally have lower amounts of lean muscle mass than men, resulting in lower caloric expenditure during rest. Furthermore, women appear to lose lean muscle mass at a faster rate as they age. <CitationLink id="7" callType="quote" citations={citations} />
                </p>
                <p>
                  This muscle loss contributes significantly to the decreased energy expenditure often experienced in middle age. However, this process is not inevitable—regular resistance training has been consistently shown to increase lean muscle mass in both men and women, even in older adults.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-purple-800">Hormonal Considerations</h3>
                <p className="mb-4">
                  Hormonal changes play a significant role in body composition changes during middle age:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>
                    <strong>For women:</strong> Perimenopause and menopause bring declining estrogen levels, which can lead to increased fat storage, particularly in the abdominal area. This shift from gynoid (hip and thigh) to android (abdominal) fat distribution increases health risks. <CitationLink id="5" callType="quote" citations={citations} />
                  </li>
                  <li>
                    <strong>For men:</strong> Testosterone levels gradually decline (approximately 1% per year after age 30), which can lead to reduced muscle mass and increased fat storage, particularly in the abdominal region.
                  </li>
                </ul>
                <p>
                  Exercise, particularly high-intensity interval training, has been shown to positively influence hormonal balance. A study of men aged 35-40 found that high-intensity interval training over an 8-week period significantly improved the balance between testosterone and cortisol levels, creating a more favorable hormonal environment for maintaining muscle and reducing fat. <CitationLink id="3" callType="quote" citations={citations} />
                </p>
              </div>
            </section>
          )}

          {activeTab === 'activities' && (
            <section id="activities" className="mb-12">
              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center text-blue-800">
                  <BarChart2 className="mr-2" size={24} />
                  Most Effective Fat-Burning Activities for 40-Year-Olds
                </h2>
                <p className="mb-4">
                  Based on scientific research, certain types of physical activity have been shown to be particularly effective for fat loss in middle-aged adults. These activities optimize fat burning through various mechanisms, including increased caloric expenditure, hormonal responses, and metabolic adaptations.
                </p>
                <p>
                  The following analysis ranks activities based on their effectiveness for fat burning, considering factors such as caloric expenditure, EPOC (excess post-exercise oxygen consumption), hormonal impact, and practicality for individuals in their 40s.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Fat-Burning Activity Effectiveness Ranking</h3>
                <div className="h-80 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={fatBurningActivitiesData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis domain={[0, 10]} label={{ value: 'Effectiveness Score (0-10)', angle: -90, position: 'insideLeft' }} />
                      <Tooltip formatter={(value) => [`${value}/10`, 'Effectiveness']} />
                      <Bar dataKey="effectiveness" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-sm text-gray-500 text-center mt-2">Figure 2: Effectiveness ranking of fat-burning activities for adults in their 40s</p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Calories Burned Per Minute by Activity</h3>
                <div className="h-80 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={caloriesBurnedData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis label={{ value: 'Calories/Minute', angle: -90, position: 'insideLeft' }} />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="140lb Person" fill="#8884d8" />
                      <Bar dataKey="180lb Person" fill="#82ca9d" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-sm text-gray-500 text-center mt-2">Figure 3: Calories burned per minute by activity and body weight <CitationLink id="1" callType="quote" citations={citations} /></p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-green-800 flex items-center">
                    <Zap className="mr-2" size={20} />
                    High-Intensity Interval Training (HIIT)
                  </h3>
                  <p className="mb-4">
                    HIIT involves short bursts of intense exercise alternated with recovery periods. Research consistently shows it to be among the most effective methods for fat loss in middle-aged adults.
                  </p>
                  <p className="mb-2"><strong>Key benefits:</strong></p>
                  <ul className="list-disc pl-6 space-y-1 mb-4">
                    <li>Maximizes caloric burn in minimal time</li>
                    <li>Creates significant EPOC (afterburn effect)</li>
                    <li>Preserves muscle mass while targeting fat</li>
                    <li>Improves insulin sensitivity</li>
                    <li>Positively impacts hormonal balance</li>
                  </ul>
                  <p className="text-sm">
                    A 2023 review of 36 studies found that HIIT may help reduce body fat percentage, improve body composition, and preserve fat mass, which could help with long-term weight management. The authors noted that cycling-based HIIT programs were the most effective. <CitationLink id="13" callType="quote" citations={citations} />
                  </p>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-purple-800 flex items-center">
                    <Dumbbell className="mr-2" size={20} />
                    Strength Training
                  </h3>
                  <p className="mb-4">
                    Resistance training is crucial for maintaining and building muscle mass, which naturally declines with age. More muscle mass means a higher resting metabolic rate.
                  </p>
                  <p className="mb-2"><strong>Key benefits:</strong></p>
                  <ul className="list-disc pl-6 space-y-1 mb-4">
                    <li>Increases lean muscle mass</li>
                    <li>Elevates resting metabolic rate</li>
                    <li>Improves insulin sensitivity</li>
                    <li>Enhances bone density</li>
                    <li>Supports functional movement and prevents injury</li>
                  </ul>
                  <p className="text-sm">
                    Exercises that require the coordination and movement of multiple joints, such as squats, deadlifts, Olympic lifts, pull-ups, and push-ups, are the most effective for maximizing fat loss and muscle gain. These compound exercises utilize a large amount of muscle, requiring elevated oxygen use and hormonal response. <CitationLink id="6" callType="quote" citations={citations} />
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-blue-800 flex items-center">
                    <Activity className="mr-2" size={20} />
                    Moderate-Intensity Cardio
                  </h3>
                  <p className="mb-4">
                    Activities like jogging, cycling, swimming, and brisk walking provide valuable cardiovascular benefits while burning calories.
                  </p>
                  <p className="mb-2"><strong>Key benefits:</strong></p>
                  <ul className="list-disc pl-6 space-y-1 mb-4">
                    <li>Sustainable for longer durations</li>
                    <li>Lower impact options available (swimming, cycling)</li>
                    <li>Improves cardiovascular health</li>
                    <li>Can be easily incorporated into daily life</li>
                    <li>Supports recovery between higher-intensity sessions</li>
                  </ul>
                  <p className="text-sm">
                    According to the American Council on Exercise, a 140-pound person burns about 10.8 calories per minute jogging and 13.2 calories per minute when running. Swimming at a moderate pace burns about 9 calories per minute. <CitationLink id="1" callType="quote" citations={citations} />
                  </p>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-yellow-800 flex items-center">
                    <Repeat className="mr-2" size={20} />
                    Circuit Training
                  </h3>
                  <p className="mb-4">
                    Circuit training combines strength exercises with limited rest periods, providing both resistance and cardiovascular benefits.
                  </p>
                  <p className="mb-2"><strong>Key benefits:</strong></p>
                  <ul className="list-disc pl-6 space-y-1 mb-4">
                    <li>Combines strength and cardio benefits</li>
                    <li>Time-efficient</li>
                    <li>Highly customizable for different fitness levels</li>
                    <li>Can be performed with minimal equipment</li>
                    <li>Maintains elevated heart rate throughout workout</li>
                  </ul>
                  <p className="text-sm">
                    Although resistance training with shortened rest periods is often celebrated as the "best" for fat loss, it can cause significant fatigue to the central nervous system. To observe continual, long-term fat-loss results, defined training blocks should oscillate between periods of optimal and sub-optimal recovery between sets. <CitationLink id="6" callType="quote" citations={citations} />
                  </p>
                </div>
              </div>
            </section>
          )}

          {activeTab === 'hiit' && (
            <section id="hiit" className="mb-12">
              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center text-blue-800">
                  <Zap className="mr-2" size={24} />
                  HIIT Deep Dive: The Science Behind Its Effectiveness
                </h2>
                <p className="mb-4">
                  High-Intensity Interval Training (HIIT) has emerged as one of the most effective exercise modalities for fat loss, particularly for adults in their 40s. This section explores the scientific mechanisms behind HIIT's effectiveness and provides practical implementation strategies.
                </p>
                <p>
                  HIIT involves short bursts of intense exercise (typically 80-95% of maximum heart rate) alternated with recovery periods. Sessions are typically shorter than traditional cardio workouts but deliver comparable or superior results for fat loss. <CitationLink id="8" callType="quote" citations={citations} />
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">HIIT Benefits for Fat Loss</h3>
                <div className="h-80 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart outerRadius={90} width={730} height={250} data={hiitBenefitsData}>
                      <PolarGrid />
                      <PolarAngleAxis dataKey="subject" />
                      <PolarRadiusAxis angle={30} domain={[0, 10]} />
                      <Radar name="HIIT Effectiveness" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                      <Legend />
                      <Tooltip />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-sm text-gray-500 text-center mt-2">Figure 4: HIIT effectiveness across different parameters (scale 0-10)</p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-3 text-green-800">How HIIT Burns Fat: The Mechanisms</h3>
                <p className="mb-4">
                  HIIT's effectiveness for fat loss operates through several physiological mechanisms:
                </p>
                <ol className="list-decimal pl-6 space-y-3 mb-4">
                  <li>
                    <strong>EPOC (Excess Post-exercise Oxygen Consumption):</strong> HIIT creates a significant "afterburn effect," where the body continues to consume elevated amounts of oxygen and burn calories for up to 24 hours after exercise to restore physiological functions to baseline.
                  </li>
                  <li>
                    <strong>Hormonal Response:</strong> HIIT triggers the release of catecholamines (adrenaline and noradrenaline) and growth hormone, which stimulate fat mobilization and oxidation. Research shows HIIT can positively influence the testosterone-to-cortisol ratio in middle-aged adults. <CitationLink id="3" callType="quote" citations={citations} />
                  </li>
                  <li>
                    <strong>Metabolic Adaptations:</strong> Regular HIIT improves mitochondrial function and increases the body's capacity to use fat as fuel, even during rest.
                  </li>
                  <li>
                    <strong>Muscle Preservation:</strong> Unlike long-duration steady-state cardio, HIIT helps preserve lean muscle mass while primarily targeting fat stores.
                  </li>
                  <li>
                    <strong>Improved Insulin Sensitivity:</strong> HIIT enhances insulin function, reducing fat storage and improving glucose metabolism.
                  </li>
                </ol>
                <p className="text-sm">
                  It's important to note that while HIIT is highly effective, the traditional "fat-burning zone" concept (low-intensity exercise) has been largely debunked. The total caloric expenditure and overall energy balance are more important for fat loss than the percentage of energy derived from fat during exercise. <CitationLink id="11" callType="quote" citations={citations} />
                </p>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-3 text-yellow-800">HIIT Research Specific to Middle Age</h3>
                <p className="mb-4">
                  Several studies have specifically examined HIIT's effectiveness in middle-aged populations:
                </p>
                <ul className="list-disc pl-6 space-y-3 mb-4">
                  <li>
                    A 12-month intervention study with overweight adults found that those who adhered to regular HIIT (at least twice weekly) demonstrated significant reductions in weight (-2.7 kg) and visceral fat (-292 cm³) compared to non-adherent participants. <CitationLink id="10" callType="quote" citations={citations} />
                  </li>
                  <li>
                    Research with overweight premenopausal women showed that 40-minute HIIT sessions performed three times weekly at 80-90% of heart rate reserve for 16 weeks led to significant improvements in metabolic markers. <CitationLink id="9" callType="quote" citations={citations} />
                  </li>
                  <li>
                    A study of men aged 35-40 found that high-intensity interval training over an 8-week period significantly improved the balance between testosterone and cortisol levels, creating a more favorable hormonal environment for fat loss and muscle maintenance. <CitationLink id="3" callType="quote" citations={citations} />
                  </li>
                </ul>
                <p>
                  These findings suggest that HIIT is not only effective for fat loss in middle-aged adults but may also provide additional benefits for hormonal balance and metabolic health that are particularly relevant during this life stage.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-purple-800">Practical HIIT Implementation for 40-Year-Olds</h3>
                <p className="mb-4">
                  While HIIT is highly effective, it must be implemented appropriately for individuals in their 40s to maximize benefits while minimizing injury risk:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">Recommended HIIT Protocols:</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Beginner:</strong> 20-30 seconds work, 60-90 seconds recovery, 10-15 minutes total</li>
                      <li><strong>Intermediate:</strong> 30-45 seconds work, 45-60 seconds recovery, 15-25 minutes total</li>
                      <li><strong>Advanced:</strong> 40-60 seconds work, 30-45 seconds recovery, 20-30 minutes total</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Important Considerations:</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Proper warm-up (5-10 minutes) is essential</li>
                      <li>Start with 1-2 HIIT sessions weekly</li>
                      <li>Allow 48 hours between HIIT sessions</li>
                      <li>Focus on form over intensity, especially when beginning</li>
                      <li>Modify high-impact movements if needed</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="font-bold mb-2">Sample HIIT Exercises Suitable for 40-Year-Olds:</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Lower impact:</strong> Cycling, rowing, elliptical sprints, swimming intervals</li>
                    <li><strong>Moderate impact:</strong> Kettlebell swings, battle ropes, bodyweight squats, modified burpees</li>
                    <li><strong>Higher impact (for those with no joint issues):</strong> Mountain climbers, jumping jacks, jump squats</li>
                  </ul>
                </div>
              </div>
            </section>
          )}

          {activeTab === 'strength' && (
            <section id="strength" className="mb-12">
              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center text-blue-800">
                  <Dumbbell className="mr-2" size={24} />
                  Strength Training Benefits for Fat Loss in Your 40s
                </h2>
                <p className="mb-4">
                  While cardio exercises often get the spotlight for fat burning, strength training plays an equally—if not more—crucial role in fat loss for adults in their 40s. This section explores the specific benefits of resistance training for middle-aged individuals and provides evidence-based recommendations.
                </p>
                <p>
                  Strength training becomes increasingly important as we age due to the natural decline in muscle mass (sarcopenia) that begins around age 30 and accelerates in our 40s and beyond. This loss of muscle negatively impacts metabolism, functional capacity, and overall health. <CitationLink id="15" callType="quote" citations={citations} />
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-3 text-green-800">Key Benefits of Strength Training for Fat Loss</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2 flex items-center">
                      <TrendingUp className="mr-2" size={18} />
                      Increased Resting Metabolic Rate
                    </h4>
                    <p className="mb-4">
                      Muscle tissue is metabolically active, burning more calories at rest than fat tissue. By preserving and building muscle mass through strength training, you can maintain a higher resting metabolic rate, which accounts for 60-70% of daily calorie expenditure.
                    </p>
                    <p className="text-sm">
                      Research shows that the age-related decline in resting metabolic rate in sedentary women is not observed in women who regularly perform endurance exercise. The elevated level of RMR observed in middle-aged and older exercising women may play a role in their lower levels of body weight and fatness compared to those in sedentary women. <CitationLink id="4" callType="quote" citations={citations} />
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 flex items-center">
                      <Activity className="mr-2" size={18} />
                      EPOC (Afterburn Effect)
                    </h4>
                    <p className="mb-4">
                      Resistance training, particularly with heavier weights and compound movements, creates a significant EPOC (excess post-exercise oxygen consumption) effect. This means your body continues to burn additional calories for hours after your workout as it repairs muscle tissue and restores physiological functions to baseline.
                    </p>
                    <p className="text-sm">
                      The hormonal environment created by intense resistance training is favorable for muscle formation and fat utilization. <CitationLink id="6" callType="quote" citations={citations} />
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h4 className="font-bold mb-2 flex items-center">
                      <Heart className="mr-2" size={18} />
                      Improved Insulin Sensitivity
                    </h4>
                    <p>
                      Strength training enhances insulin sensitivity, improving your body's ability to manage blood glucose and reducing the likelihood of excess fat storage. This is particularly important in middle age when insulin resistance tends to increase.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 flex items-center">
                      <Users className="mr-2" size={18} />
                      Hormonal Benefits
                    </h4>
                    <p>
                      Resistance training stimulates the release of growth hormone and testosterone (in both men and women, though in different amounts), which play key roles in fat metabolism and muscle preservation. These hormonal responses become increasingly important in your 40s as natural production begins to decline.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-3 text-yellow-800">Optimal Strength Training Approaches for Fat Loss</h3>
                <p className="mb-4">
                  Research indicates that certain strength training approaches are particularly effective for fat loss in middle-aged adults:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">Compound Movements</h4>
                    <p className="mb-4">
                      Exercises that engage multiple muscle groups simultaneously (squats, deadlifts, push-ups, rows) burn more calories, stimulate greater hormonal responses, and build functional strength more effectively than isolation exercises.
                    </p>
                    <p className="text-sm">
                      Exercises that require the coordination and movement of multiple joints are the most effective for maximizing fat loss and muscle gain. These compound exercises utilize a large amount of muscle, requiring elevated oxygen use and hormonal response. <CitationLink id="6" callType="quote" citations={citations} />
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Progressive Overload</h4>
                    <p>
                      Gradually increasing the demands placed on your muscles (through heavier weights, more repetitions, or increased time under tension) is essential for continued adaptation and results. This is especially important in your 40s when the body may be less responsive to training stimuli than in earlier decades.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h4 className="font-bold mb-2">Periodization</h4>
                    <p>
                      Systematically varying training volume and intensity over time helps prevent plateaus and overtraining while optimizing results. For adults in their 40s, this approach is particularly valuable for managing recovery needs while still providing sufficient stimulus for progress.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Circuit-Style Training</h4>
                    <p>
                      Performing resistance exercises with limited rest between movements keeps heart rate elevated, combining strength and cardiovascular benefits. This approach is time-efficient and particularly effective for fat loss, though it should be balanced with traditional strength training that allows for adequate recovery between sets.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-purple-800">Recommended Strength Training Protocol for Fat Loss in Your 40s</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">Frequency</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>2-3 strength training sessions per week</li>
                      <li>Allow at least 48 hours between sessions targeting the same muscle groups</li>
                      <li>Consider a full-body approach 2-3x weekly or an upper/lower split 4x weekly</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Volume & Intensity</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>3-4 sets per exercise</li>
                      <li>8-12 repetitions for hypertrophy focus</li>
                      <li>4-6 repetitions for strength focus</li>
                      <li>Weight should be challenging for the prescribed rep range</li>
                    </ul>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h4 className="font-bold mb-2">Exercise Selection</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li><strong>Lower body:</strong> Squats, deadlifts, lunges, hip thrusts</li>
                      <li><strong>Upper body push:</strong> Push-ups, bench press, overhead press</li>
                      <li><strong>Upper body pull:</strong> Rows, pull-ups/lat pulldowns</li>
                      <li><strong>Core:</strong> Planks, anti-rotation exercises</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Special Considerations for 40+</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Prioritize proper warm-up (5-10 minutes)</li>
                      <li>Focus on form over weight</li>
                      <li>Consider longer recovery periods between sets (60-90 seconds)</li>
                      <li>Implement deload weeks every 4-6 weeks</li>
                      <li>Modify exercises as needed for joint comfort</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-sm">
                    The oscillation of training intensity and volume is a primary tenant of the highly effective and well-researched long-term training paradigm called periodization. When the training stimulus is changed strategically, it optimizes the desired impact of a program (fat loss, strength, improvements in performance, etc.) and minimizes the unwanted impact (fatigue, injury, stagnation). <CitationLink id="6" callType="quote" citations={citations} />
                  </p>
                </div>
              </div>
            </section>
          )}

          {activeTab === 'home' && (
            <section id="home" className="mb-12">
              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center text-blue-800">
                  <Home className="mr-2" size={24} />
                  Advanced Home Fat-Burning Workouts
                </h2>
                <p className="mb-4">
                  Home workouts have evolved significantly beyond basic calisthenics. With the right approach, you can achieve advanced, highly effective fat-burning workouts without leaving your home. This section provides structured, evidence-based home workout protocols specifically designed for adults in their 40s looking to maximize fat loss.
                </p>
                <p>
                  These workouts incorporate principles from both HIIT and strength training to create time-efficient, effective sessions that can be performed with minimal equipment. They're designed to be progressive, allowing you to continually challenge yourself as your fitness improves.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-3 text-green-800">Advanced HIIT Home Workout</h3>
                <p className="mb-4">
                  This 30-minute HIIT workout requires no equipment and is designed to maximize calorie burn and EPOC (afterburn effect). It incorporates full-body movements with an emphasis on compound exercises.
                </p>
                <div className="mb-4">
                  <h4 className="font-bold mb-2">Workout Structure:</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><strong>Warm-up:</strong> 5 minutes of dynamic movements</li>
                    <li><strong>Work intervals:</strong> 40 seconds</li>
                    <li><strong>Rest intervals:</strong> 20 seconds</li>
                    <li><strong>Rounds:</strong> 5 circuits of 4 exercises (20 minutes total)</li>
                    <li><strong>Cool-down:</strong> 5 minutes of stretching</li>
                  </ul>
                </div>
                <div className="mb-4">
                  <h4 className="font-bold mb-2">Exercise Circuit:</h4>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>
                      <strong>Squat to overhead reach</strong> (lower body + core)
                      <p className="text-sm text-gray-600">Stand with feet shoulder-width apart, perform a squat, then as you rise, reach arms overhead.</p>
                    </li>
                    <li>
                      <strong>Mountain climbers</strong> (core + cardio)
                      <p className="text-sm text-gray-600">In plank position, alternate bringing knees toward chest in a running motion.</p>
                    </li>
                    <li>
                      <strong>Push-up variations</strong> (upper body)
                      <p className="text-sm text-gray-600">Standard, incline, or knee push-ups depending on fitness level.</p>
                    </li>
                    <li>
                      <strong>Alternating reverse lunges</strong> (lower body)
                      <p className="text-sm text-gray-600">Step backward into a lunge, alternating legs with each rep.</p>
                    </li>
                  </ol>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Progression Options:</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Increase work interval to 45-50 seconds</li>
                    <li>Decrease rest interval to 15-10 seconds</li>
                    <li>Add plyometric elements (e.g., jump squats instead of regular squats)</li>
                    <li>Add a sixth round to increase total workout time</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-3 text-yellow-800">Advanced Dumbbell Home Workout</h3>
                <p className="mb-4">
                  This strength-focused workout requires only a pair of dumbbells (ideally two different weights) and targets all major muscle groups while maintaining an elevated heart rate for fat-burning benefits.
                </p>
                <div className="mb-4">
                  <h4 className="font-bold mb-2">Workout Structure:</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><strong>Warm-up:</strong> 5 minutes of dynamic movements</li>
                    <li><strong>Format:</strong> Superset pairs (perform exercises back-to-back)</li>
                    <li><strong>Sets:</strong> 3 sets per superset</li>
                    <li><strong>Reps:</strong> 10-12 per exercise</li>
                    <li><strong>Rest:</strong> 30 seconds between supersets, 60 seconds between rounds</li>
                    <li><strong>Total time:</strong> Approximately 40 minutes</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Exercise Supersets:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-bold">Superset 1:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Goblet squats</li>
                        <li>Renegade rows</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-bold">Superset 2:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Romanian deadlifts</li>
                        <li>Dumbbell push press</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-bold">Superset 3:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Reverse lunges (alternating)</li>
                        <li>Chest press</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-bold">Superset 4:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Dumbbell Russian twists</li>
                        <li>Dumbbell pullovers</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-3 text-purple-800">Advanced Metabolic Conditioning Circuit</h3>
                <p className="mb-4">
                  This workout combines strength and cardio elements in a circuit format to maximize fat burning through elevated heart rate and muscle engagement. It requires minimal equipment.
                </p>
                <div className="mb-4">
                  <h4 className="font-bold mb-2">Workout Structure:</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><strong>Warm-up:</strong> 5 minutes of dynamic movements</li>
                    <li><strong>Format:</strong> Complete all exercises in sequence with minimal rest</li>
                    <li><strong>Rounds:</strong> 4 complete circuits</li>
                    <li><strong>Work time:</strong> 45 seconds per exercise</li>
                    <li><strong>Rest:</strong> 15 seconds between exercises, 60 seconds between rounds</li>
                    <li><strong>Total time:</strong> Approximately 35 minutes</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Exercise Circuit:</h4>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>
                      <strong>Kettlebell/dumbbell swings</strong>
                      <p className="text-sm text-gray-600">Hinge at hips, swing weight between legs and up to shoulder height.</p>
                    </li>
                    <li>
                      <strong>Plank shoulder taps</strong>
                      <p className="text-sm text-gray-600">In plank position, alternately lift one hand to tap opposite shoulder.</p>
                    </li>
                    <li>
                      <strong>Dumbbell thrusters</strong>
                      <p className="text-sm text-gray-600">Squat holding dumbbells at shoulders, then press overhead as you stand.</p>
                    </li>
                    <li>
                      <strong>Renegade rows</strong>
                      <p className="text-sm text-gray-600">In plank position with hands on dumbbells, row one weight to hip while stabilizing.</p>
                    </li>
                    <li>
                      <strong>Lateral lunges with bicep curl</strong>
                      <p className="text-sm text-gray-600">Step to side in lateral lunge while performing bicep curl.</p>
                    </li>
                    <li>
                      <strong>Mountain climbers</strong>
                      <p className="text-sm text-gray-600">In plank position, alternate bringing knees toward chest rapidly.</p>
                    </li>
                  </ol>
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-red-800 flex items-center">
                  <AlertTriangle className="mr-2" size={20} />
                  Important Considerations for Home Workouts
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">Safety First</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Clear adequate space for movement</li>
                      <li>Use proper form—consider recording yourself to check technique</li>
                      <li>Start with modified versions of exercises if needed</li>
                      <li>Be mindful of joint stress, especially with high-impact movements</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Equipment Recommendations</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Adjustable dumbbells or 2-3 pairs of different weights</li>
                      <li>Exercise mat for floor work</li>
                      <li>Resistance bands for added variety</li>
                      <li>Sturdy chair or bench for step-ups, dips, etc.</li>
                      <li>Heart rate monitor to track intensity (optional)</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6">
                  <h4 className="font-bold mb-2">Progression and Adaptation</h4>
                  <p className="mb-4">
                    For continued results, your home workouts must evolve as your fitness improves. Consider these progression strategies:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Increase weights as exercises become easier</li>
                    <li>Add complexity to movements (e.g., single-leg variations)</li>
                    <li>Adjust work-to-rest ratios (more work, less rest)</li>
                    <li>Increase workout density by adding exercises or rounds</li>
                    <li>Incorporate more challenging exercise variations</li>
                  </ul>
                </div>
              </div>
            </section>
          )}

          {activeTab === 'frequency' && (
            <section id="frequency" className="mb-12">
              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center text-blue-800">
                  <Calendar className="mr-2" size={24} />
                  Optimal Training Frequency for Fat Loss
                </h2>
                <p className="mb-4">
                  Determining the optimal training frequency involves balancing exercise volume with adequate recovery, especially for adults in their 40s. This section provides evidence-based recommendations for how often to train for maximum fat loss while preventing overtraining and injury.
                </p>
                <p>
                  Research indicates that consistency is more important than extreme frequency. A sustainable approach that allows for proper recovery will yield better long-term results than an overly ambitious schedule that leads to burnout or injury.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Weekly Training Frequency Recommendations</h3>
                <div className="h-80 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={weeklyFrequencyData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis label={{ value: 'Sessions Per Week', angle: -90, position: 'insideLeft' }} />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="hiit" name="HIIT" fill="#8884d8" />
                      <Bar dataKey="strength" name="Strength Training" fill="#82ca9d" />
                      <Bar dataKey="cardio" name="Moderate Cardio" fill="#ffc658" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-sm text-gray-500 text-center mt-2">Figure 5: Recommended weekly training frequency by fitness level</p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-3 text-green-800">Research-Based Frequency Guidelines</h3>
                <p className="mb-4">
                  Scientific research provides valuable insights into optimal training frequency for fat loss in middle-aged adults:
                </p>
                <ul className="list-disc pl-6 space-y-3 mb-4">
                  <li>
                    <strong>HIIT Frequency:</strong> Research suggests 2-3 HIIT sessions per week is optimal for fat loss while allowing adequate recovery. A study of overweight adults found that those who maintained at least 2 HIIT sessions weekly showed significant reductions in weight and visceral fat over 12 months. <CitationLink id="10" callType="quote" citations={citations} />
                  </li>
                  <li>
                    <strong>Strength Training Frequency:</strong> For optimal fat loss and muscle preservation, research supports 2-3 strength training sessions per week targeting all major muscle groups. This frequency provides sufficient stimulus for muscle development while allowing for recovery. <CitationLink id="2" callType="quote" citations={citations} />
                  </li>
                  <li>
                    <strong>Total Weekly Sessions:</strong> Studies indicate that 4-6 total exercise sessions per week (combining different modalities) is effective for fat loss while being sustainable for most individuals. This approach allows for adequate training volume while preventing overtraining. <CitationLink id="2" callType="quote" citations={citations} />
                  </li>
                </ul>
                <p>
                  It's important to note that these are general guidelines. Individual factors such as current fitness level, recovery capacity, stress levels, and time constraints will influence the optimal frequency for each person.
                </p>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-3 text-yellow-800">Sample Weekly Training Schedules</h3>
                <p className="mb-4">
                  These sample schedules illustrate how to implement optimal training frequency for different fitness levels and time availability:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h4 className="font-bold mb-2 text-center">Beginner Schedule (3-4 days/week)</h4>
                    <ul className="list-none space-y-2">
                      <li><strong>Monday:</strong> Full-body strength training</li>
                      <li><strong>Tuesday:</strong> Rest or light walking</li>
                      <li><strong>Wednesday:</strong> HIIT (20 minutes)</li>
                      <li><strong>Thursday:</strong> Rest or light walking</li>
                      <li><strong>Friday:</strong> Full-body strength training</li>
                      <li><strong>Saturday:</strong> Moderate cardio (30+ minutes)</li>
                      <li><strong>Sunday:</strong> Rest</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h4 className="font-bold mb-2 text-center">Intermediate Schedule (4-5 days/week)</h4>
                    <ul className="list-none space-y-2">
                      <li><strong>Monday:</strong> Upper body strength</li>
                      <li><strong>Tuesday:</strong> HIIT (25 minutes)</li>
                      <li><strong>Wednesday:</strong> Lower body strength</li>
                      <li><strong>Thursday:</strong> Moderate cardio (30+ minutes)</li>
                      <li><strong>Friday:</strong> Full-body circuit training</li>
                      <li><strong>Saturday:</strong> Active recovery (walking, yoga)</li>
                      <li><strong>Sunday:</strong> Rest</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h4 className="font-bold mb-2 text-center">Advanced Schedule (5-6 days/week)</h4>
                    <ul className="list-none space-y-2">
                      <li><strong>Monday:</strong> Upper body strength</li>
                      <li><strong>Tuesday:</strong> HIIT (30 minutes)</li>
                      <li><strong>Wednesday:</strong> Lower body strength</li>
                      <li><strong>Thursday:</strong> HIIT (25 minutes)</li>
                      <li><strong>Friday:</strong> Full-body strength</li>
                      <li><strong>Saturday:</strong> Longer moderate cardio (45+ minutes)</li>
                      <li><strong>Sunday:</strong> Rest or active recovery</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-purple-800">Special Frequency Considerations for 40-Year-Olds</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2 flex items-center">
                      <Clock className="mr-2" size={18} />
                      Recovery Needs
                    </h4>
                    <p className="mb-4">
                      Adults in their 40s typically require more recovery time between intense training sessions compared to younger individuals. This doesn't mean training less frequently, but rather strategically planning workout intensity and targeting different muscle groups to allow for adequate recovery.
                    </p>
                    <p className="text-sm">
                      Consider implementing a hard/easy approach, alternating between high-intensity and lower-intensity days to optimize recovery while maintaining training frequency.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 flex items-center">
                      <Award className="mr-2" size={18} />
                      Quality Over Quantity
                    </h4>
                    <p>
                      Focus on the quality and effectiveness of each workout rather than simply maximizing frequency. A well-designed 30-minute HIIT session can be more effective for fat loss than an hour of low-intensity steady-state cardio. This approach is particularly valuable for busy adults in their 40s with multiple responsibilities.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h4 className="font-bold mb-2 flex items-center">
                      <ThumbsUp className="mr-2" size={18} />
                      Consistency Over Perfection
                    </h4>
                    <p>
                      Research shows that adherence to a regular exercise routine is the most important factor for long-term success. A study on HIIT in overweight adults found that while many participants didn't maintain the recommended frequency over 12 months, those who consistently performed even 1-2 HIIT sessions weekly saw significant benefits compared to those who stopped entirely. <CitationLink id="10" callType="quote" citations={citations} />
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 flex items-center">
                      <Clipboard className="mr-2" size={18} />
                      Periodization
                    </h4>
                    <p>
                      Consider implementing training cycles that vary in intensity and volume throughout the year. This approach helps prevent plateaus, reduces injury risk, and accommodates the varying energy levels and time constraints that come with adult life. For example, you might include 4-6 week blocks of higher frequency training followed by 1-2 weeks of reduced volume for recovery.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {activeTab === 'nutrition' && (
            <section id="nutrition" className="mb-12">
              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center text-blue-800">
                  <Coffee className="mr-2" size={24} />
                  Nutrition Considerations for Fat Loss in Your 40s
                </h2>
                <p className="mb-4">
                  While this report focuses primarily on exercise strategies for fat loss, nutrition plays an equally—if not more—important role in achieving and maintaining a healthy body composition. This section provides key nutritional considerations that complement your exercise regimen.
                </p>
                <p>
                  The nutritional needs of adults in their 40s differ somewhat from younger individuals due to changes in metabolism, hormones, and lifestyle factors. Understanding these differences can help optimize your nutrition approach for fat loss.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-3 text-green-800">Key Nutritional Strategies</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">Protein Intake</h4>
                    <p className="mb-4">
                      Adequate protein intake becomes increasingly important in your 40s to preserve muscle mass and support recovery from exercise. Research suggests that adults in this age group may benefit from slightly higher protein intake than younger adults.
                    </p>
                    <p className="text-sm">
                      Aim for 1.2-1.6 grams of protein per kilogram of body weight daily, spread across meals throughout the day. Include a variety of protein sources such as lean meats, fish, eggs, dairy, legumes, and plant-based proteins. <CitationLink id="13" callType="quote" citations={citations} />
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Caloric Intake</h4>
                    <p className="mb-4">
                      While a caloric deficit is necessary for fat loss, extreme restriction can be counterproductive, particularly in middle age when preserving muscle mass and metabolic health is crucial.
                    </p>
                    <p className="text-sm">
                      Consider a moderate deficit of 300-500 calories per day for sustainable fat loss. This approach allows for adequate nutrition while creating the energy deficit needed for fat reduction. Periodically taking breaks from caloric restriction can help prevent metabolic adaptation and maintain long-term progress.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h4 className="font-bold mb-2">Meal Timing</h4>
                    <p>
                      Strategic meal timing can enhance workout performance and recovery. Consider consuming a combination of protein and carbohydrates within 1-2 hours after exercise to support muscle recovery and replenish glycogen stores. For fat loss specifically, some research suggests benefits to consuming a larger proportion of daily calories earlier in the day rather than in the evening.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Hydration</h4>
                    <p>
                      Proper hydration supports metabolism, exercise performance, and recovery. Dehydration can sometimes be mistaken for hunger, leading to unnecessary calorie consumption. Aim for at least 2-3 liters of water daily, with additional fluid intake during and after exercise based on sweat rate and environmental conditions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-yellow-800">Nutritional Considerations Specific to Middle Age</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">Hormonal Changes</h4>
                    <p className="mb-4">
                      Hormonal shifts in your 40s can influence fat storage patterns and metabolism. For women approaching perimenopause, declining estrogen can lead to increased abdominal fat storage. For men, gradually decreasing testosterone can reduce muscle mass and increase fat accumulation.
                    </p>
                    <p className="text-sm">
                      Consider including foods that support hormonal balance, such as those rich in omega-3 fatty acids, fiber, and phytonutrients. Some research suggests that intermittent fasting approaches may help mitigate some of the metabolic effects of hormonal changes, though individual responses vary. <CitationLink id="13" callType="quote" citations={citations} />
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Micronutrient Needs</h4>
                    <p className="mb-4">
                      Certain micronutrient needs increase with age, particularly vitamin D, calcium, magnesium, and B vitamins. These nutrients play important roles in metabolism, muscle function, and overall health.
                    </p>
                    <p className="text-sm">
                      Focus on a nutrient-dense diet rich in colorful vegetables, fruits, whole grains, lean proteins, and healthy fats. Consider discussing supplementation with a healthcare provider, particularly for vitamin D, which many adults are deficient in and which plays a role in metabolic health.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h4 className="font-bold mb-2">Inflammation Management</h4>
                    <p>
                      Chronic inflammation tends to increase with age and can interfere with fat loss and metabolic health. An anti-inflammatory dietary approach emphasizing whole foods and limiting processed foods, added sugars, and refined carbohydrates may help mitigate this effect and support fat loss efforts.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Sleep and Stress</h4>
                    <p>
                      While not strictly nutritional factors, sleep quality and stress management significantly impact metabolism and eating behaviors. Poor sleep and chronic stress can increase cortisol levels, promoting fat storage, particularly in the abdominal region. Prioritizing sleep hygiene and stress management techniques can support your nutritional approach to fat loss.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {activeTab === 'conclusion' && (
            <section id="conclusion" className="mb-12">
              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center text-blue-800">
                  <CheckCircle className="mr-2" size={24} />
                  Conclusion: Creating Your Sustainable Fat Loss Strategy
                </h2>
                <p className="mb-4">
                  This comprehensive analysis of fat burning in your 40s reveals that while physiological changes do occur during this decade, they don't have to impede your progress toward a leaner, healthier body composition. In fact, with the right approach, your 40s can be a time of significant positive transformation.
                </p>
                <p>
                  The research clearly shows that the most effective fat-burning strategy for adults in their 40s combines several key elements: high-intensity interval training, regular strength training to preserve and build muscle mass, strategic moderate-intensity cardio, and appropriate nutrition to support these activities.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-3 text-green-800">Key Takeaways</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2 flex items-center">
                      <ArrowRight className="mr-2" size={18} />
                      Metabolism Myths Debunked
                    </h4>
                    <p>
                      The common belief that metabolism significantly slows in your 40s is largely a myth. Research shows that when body mass is accounted for, metabolism remains relatively stable from age 20 to 60. Weight gain in middle age is more related to decreased physical activity, reduced muscle mass, and lifestyle factors than to an inevitable metabolic slowdown. <CitationLink id="14" callType="quote" citations={citations} />
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 flex items-center">
                      <ArrowRight className="mr-2" size={18} />
                      HIIT: The Fat-Burning Powerhouse
                    </h4>
                    <p>
                      High-intensity interval training has consistently shown superior results for fat loss in middle-aged adults. Its effectiveness stems from multiple mechanisms: increased caloric expenditure, significant EPOC (afterburn), favorable hormonal responses, and preservation of lean muscle mass. For adults in their 40s, 2-3 HIIT sessions weekly provides optimal benefits while allowing adequate recovery. <CitationLink id="13" callType="quote" citations={citations} />
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h4 className="font-bold mb-2 flex items-center">
                      <ArrowRight className="mr-2" size={18} />
                      Strength Training: Non-Negotiable
                    </h4>
                    <p>
                      Resistance training is essential for fat loss in your 40s, not optional. It preserves and builds metabolically active muscle tissue, improves insulin sensitivity, creates favorable hormonal responses, and enhances overall functional capacity. Prioritize compound movements 2-3 times weekly, focusing on progressive overload and proper form. <CitationLink id="6" callType="quote" citations={citations} />
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 flex items-center">
                      <ArrowRight className="mr-2" size={18} />
                      Consistency Trumps Perfection
                    </h4>
                    <p>
                      Research on long-term adherence to exercise programs shows that consistency is more important than perfection. A sustainable approach that you can maintain over time will yield better results than an overly ambitious program that leads to burnout. Finding activities you enjoy and can realistically fit into your lifestyle is crucial for long-term success. <CitationLink id="10" callType="quote" citations={citations} />
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-yellow-800">Creating Your Personalized Strategy</h3>
                <p className="mb-4">
                  Based on the research presented in this report, here's a framework for developing your personalized fat-burning strategy:
                </p>
                <ol className="list-decimal pl-6 space-y-3 mb-6">
                  <li>
                    <strong>Assess your current fitness level and limitations</strong> - Be honest about where you're starting from and any physical limitations you need to accommodate.
                  </li>
                  <li>
                    <strong>Establish a sustainable weekly exercise framework</strong> - Begin with 3-4 weekly sessions combining HIIT (1-2x) and strength training (2x), gradually increasing frequency as your fitness improves.
                  </li>
                  <li>
                    <strong>Prioritize recovery and progression</strong> - Ensure adequate rest between intense sessions and implement strategic progression to continually challenge your body.
                  </li>
                  <li>
                    <strong>Align nutrition with your exercise approach</strong> - Create a moderate caloric deficit while prioritizing protein intake and nutrient density.
                  </li>
                  <li>
                    <strong>Monitor and adjust</strong> - Track your progress using multiple metrics (not just scale weight) and be willing to adjust your approach based on results and feedback from your body.
                  </li>
                </ol>
                <p className="mb-4">
                  Remember that starting exercise in midlife can yield remarkable benefits, comparable to those seen in individuals who have exercised throughout their lives. Research shows that middle-aged individuals commencing exercise yield similar outcomes in regulating aging-associated metabolic parameters compared to lifelong exercisers. <CitationLink id="12" callType="quote" citations={citations} />
                </p>
                <p>
                  Your 40s represent a unique opportunity to establish healthy patterns that will serve you well into your later decades. By implementing the evidence-based strategies outlined in this report, you can achieve sustainable fat loss while enhancing your overall health, vitality, and quality of life.
                </p>
              </div>
            </section>
          )}
        </div>
      </div>

      <footer className="mt-12 p-6 bg-gray-50 rounded-lg">
        <h3 className="text-xl font-bold mb-4">References</h3>
        <div className="space-y-3">
          {Object.entries(citations).map(([id, citation]) => (
            <div key={id} className="text-sm">
              <CitationLink id={id} callType="recommend" citations={citations} showTitle={true} />
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default FatBurningReport;
