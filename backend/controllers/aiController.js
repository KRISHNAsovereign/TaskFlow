exports.generatePlan = async (req, res) => {
  const { goal } = req.body;
  const plans = [
    `Breakdown of ${goal}: Phase 1 - Initial planning and environment setup.`,
    `Breakdown of ${goal}: Phase 2 - Execution of core components.`,
    `Breakdown of ${goal}: Phase 3 - Quality assurance and testing.`,
    `Breakdown of ${goal}: Phase 4 - Final delivery and review.`
  ];
  setTimeout(() => {
    res.json({ goal, steps: plans, score: "92%" });
  }, 800);
};