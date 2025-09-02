'use client';

import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

const Projects = () => {
  const projects = [
    {
      title: "Terraform AWS API Gateway Module",
      description: "A reusable Terraform module for provisioning PCI DSS and CIS-compliant API Gateways on AWS. Supports S3-based OpenAPI specs, custom domains, VPC links, Lambda integrations, and CloudWatch logging with fine-grained metrics and throttling controls. Designed for security, scalability, and developer productivity.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      technologies: ["Terraform", "AWS API Gateway", "Lambda", "CloudWatch", "IAM", "S3"],
      liveUrl: "https://registry.terraform.io", 
      githubUrl: "https://github.com/vincenttetteh/terraform-aws-api-gateway",
      featured: true
    }
    ,
    {
      title: "Terraform AWS Aurora Module",
      description: "A Terraform module for deploying PCI DSS and CIS-compliant Amazon Aurora and RDS clusters. Supports Aurora Serverless v2, traditional RDS instances, and provisioned Aurora clusters with flexible configuration for capacity, networking, and security. Designed to simplify database provisioning while ensuring scalability, high availability, and compliance.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      technologies: ["Terraform", "AWS Aurora", "RDS", "VPC", "Security Groups"],
      liveUrl: "https://registry.terraform.io",
      githubUrl: "https://github.com/vincenttetteh/terraform-aws-aurora",
      featured: true
    }
    ,
    {
      title: "Terraform AWS CloudFront Module",
      description: "A Terraform module for deploying PCI DSS and CIS-compliant CloudFront distributions optimized for hosting Angular applications on S3. Features include Origin Access Identity (OAI) for securing S3, automatic HTTP to HTTPS redirection, fine-grained caching policies, and geo-restriction support. Built for performance, scalability, and security in production environments.",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=600&h=400&fit=crop",
      technologies: ["Terraform", "AWS CloudFront", "S3", "ACM", "OAI"],
      liveUrl: "https://registry.terraform.io",
      githubUrl: "https://github.com/vincenttetteh/terraform-aws-cloudfront",
      featured: true
    }
    ,
    {
      title: "Terraform AWS Cognito Pool Module",
      description: "A Terraform module for provisioning secure and compliant Amazon Cognito user pools and identity pools. Supports multi-factor authentication (MFA), password policies, social identity provider integration, and fine-grained IAM role mappings. Designed to simplify user authentication and authorization in cloud-native applications while ensuring PCI DSS and CIS compliance.",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=400&fit=crop",
      technologies: ["Terraform", "AWS Cognito", "IAM", "MFA", "OIDC/SAML"],
      liveUrl: "https://registry.terraform.io",
      githubUrl: "https://github.com/vincenttetteh/terraform-aws-cognito-pool",
      featured: true
    }
    ,
    {
      title: "Terraform AWS Complete Static Hosting Module",
      description: "A Terraform module for deploying a fully secure and compliant static website hosting solution on AWS. Combines S3, CloudFront, Route53, and ACM to deliver scalable, cost-optimized, and globally distributed static sites. Includes PCI DSS and CIS compliance features such as encryption at rest and in transit, OAC/OAI for secure origins, security headers, access logging, and CloudWatch monitoring. Designed for production-grade workloads with built-in cost optimization and security best practices.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      technologies: ["Terraform", "AWS S3", "CloudFront", "Route53", "ACM", "CloudWatch"],
      liveUrl: "https://registry.terraform.io",
      githubUrl: "https://github.com/vincenttetteh/terraform-aws-complete-static-hosting-module",
      featured: true
    }
    ,
    {
      title: "Terraform AWS DocumentDB Module",
      description: "A Terraform module for provisioning a secure and compliant Amazon DocumentDB cluster. Built to meet AWS CIS Benchmark, PCI DSS, and SOC 2 requirements, it includes encryption at rest and in transit, restricted network access, deletion protection, and automated backups. Features robust monitoring with CloudWatch, audit and profiler logging, performance alerts, and point-in-time recovery, making it ideal for mission-critical workloads.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      technologies: ["Terraform", "AWS DocumentDB", "KMS", "CloudWatch", "IAM", "VPC"],
      liveUrl: "https://registry.terraform.io",
      githubUrl: "https://github.com/vincenttetteh/terraform-aws-docdb",
      featured: true
    },
    {
      title: "Terraform AWS DynamoDB Module",
      description: "A Terraform module for provisioning secure and compliant Amazon DynamoDB tables. Implements AWS CIS Benchmark and PCI DSS standards with encryption at rest using KMS, TLS for in-transit encryption, fine-grained IAM access controls, and deletion protection. Includes CloudWatch integration for monitoring performance, audit logging for access tracking, and configurable backups with point-in-time recovery to ensure data durability and compliance.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      technologies: ["Terraform", "AWS DynamoDB", "KMS", "CloudWatch", "IAM"],
      liveUrl: "https://registry.terraform.io",
      githubUrl: "https://github.com/vincenttetteh/terraform-aws-dynamodb",
      featured: true
    },
    {
      title: "Terraform VPC Deployment Automation",
      description: "Automated AWS VPC deployment leveraging community modules with added security and compliance. Provides isolated networking environments with subnets, NAT gateways, and route tables for enterprise-ready infrastructure.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      technologies: ["Terraform", "AWS VPC", "Subnets", "NAT Gateway", "Security Groups"],
      liveUrl: "https://registry.terraform.io",
      githubUrl: "Private Repository",
      featured: true
    },
    {
      title: "Terraform Kubernetes Cluster Autoscaler",
      description: "A Terraform automation for Kubernetes cluster autoscaling using Helm and Jenkins pipelines. Dynamically scales workloads on AWS EKS with secure IAM integration, designed for resilience and cost optimization.",
      image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=600&h=400&fit=crop",
      technologies: ["Terraform", "Kubernetes", "EKS", "Helm", "Jenkins", "IAM"],
      liveUrl: "https://kubernetes.io/docs/concepts/cluster-administration/cluster-autoscaling/",
      githubUrl: "Private Repository",
      featured: false
    },
    {
      title: "Terraform AWS Custom VPC Module",
      description: "A complete Terraform module for building secure AWS VPCs with dynamic NAT gateway attachment. Includes networking, routing, and access control aligned with PCI DSS and CIS standards for enterprise environments.",
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=600&h=400&fit=crop",
      technologies: ["Terraform", "AWS VPC", "NAT Gateway", "Subnets", "ACLs"],
      liveUrl: "https://registry.terraform.io",
      githubUrl: "Private Repository",
      featured: false
    },
    {
      title: "Terraform AWS Target Group with Attachment",
      description: "Reusable Terraform module for creating AWS target groups and attaching them to ALBs or NLBs. Designed to simplify load balancing configurations with secure defaults and scalability in mind.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      technologies: ["Terraform", "AWS", "ALB", "NLB", "Target Groups"],
      liveUrl: "https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-target-groups.html",
      githubUrl: "Private Repository",
      featured: false
    },
    {
      title: "Terraform AWS S3 Module",
      description: "Terraform module for provisioning secure and compliant S3 buckets. Includes encryption, access logging, versioning, and public access blocking to meet CIS and PCI DSS standards.",
      image: "https://kubernetes.io/docs/concepts/cluster-administration/cluster-autoscaling",
      technologies: ["Terraform", "AWS S3", "Encryption", "Logging", "Access Control"],
      liveUrl: "https://registry.terraform.io/modules/terraform-aws-modules/s3-bucket/aws/latest",
      githubUrl: "Private Repository",
      featured: false
    },
    {
    title: "K8s NGINX Ingress Controller Automation",
    description: "Automated deployment of the NGINX Ingress Controller on Kubernetes using Helm, Terraform, and Jenkins pipelines. Provides secure, scalable, and PCI DSS + CIS compliant ingress routing for microservices.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
    technologies: ["Terraform", "Helm", "Jenkins", "Kubernetes", "NGINX"],
    liveUrl: "https://registry.terraform.io",
    githubUrl: "https://github.com/VIncentTetteh/k8s-nginx-ingress-controller-automation",
    featured: true
    },
    {
      title: "Kube Prometheus Stack Automation",
      description: "Full automation of the Prometheus monitoring stack on Kubernetes using Helm, Terraform, and Jenkins. Enables observability with Prometheus, Grafana, and Alertmanager while meeting PCI DSS + CIS security requirements.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
      technologies: ["Terraform", "Helm", "Jenkins", "Kubernetes", "Prometheus", "Grafana", "Alertmanager"],
      liveUrl: "https://registry.terraform.io",
      githubUrl: "https://github.com/VIncentTetteh/kube-prometheus-stack-automation",
      featured: false
    },
    {
      title: "K8s Dashboard Deployment Automation",
      description: "Automated Kubernetes Dashboard deployment using Helm, Terraform, and Jenkins. Secured with RBAC and TLS to meet PCI DSS and CIS compliance requirements.",
      image: "https://images.unsplash.com/photo-1505685296765-3a2736de412f?w=600&h=400&fit=crop",
      technologies: ["Terraform", "Helm", "Jenkins", "Kubernetes"],
      liveUrl: "https://registry.terraform.io",
      githubUrl: "https://github.com/VIncentTetteh/k8-dashboard-deployment-automation",
      featured: false
    },
    {
      title: "Datadog K8s Integration Automation",
      description: "Seamless automation of Datadog monitoring integration for Kubernetes clusters using Helm, Terraform, and Jenkins. Implements security best practices to ensure PCI DSS + CIS compliance.",
      image: "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?w=600&h=400&fit=crop",
      technologies: ["Terraform", "Helm", "Jenkins", "Kubernetes", "Datadog"],
      liveUrl: "https://registry.terraform.io",
      githubUrl: "https://github.com/VIncentTetteh/datadog-k8s-integration-automation",
      featured: false
    },
    {
      title: "Terraform Helm K8s Job Deployment",
      description: "A reusable Terraform + Helm module for deploying Kubernetes Jobs with automation support. Ensures secure and compliant workloads with PCI DSS and CIS best practices baked in.",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=600&h=400&fit=crop",
      technologies: ["Terraform", "Helm", "Kubernetes"],
      liveUrl: "https://registry.terraform.io",
      githubUrl: "https://github.com/VIncentTetteh/terraform-helm-k8s-job-deployment",
      featured: false
    },
      {
      title: "Terraform Django Elastic Beanstalk Deployment",
      description: "Terraform module to deploy a Django application on AWS Elastic Beanstalk with CloudFront distribution and automated resource provisioning. Implements PCI DSS and CIS controls for secure cloud-native applications.",
      image: "https://images.unsplash.com/photo-1559526324-593bc073d938?w=600&h=400&fit=crop",
      technologies: ["Terraform", "AWS Elastic Beanstalk", "CloudFront", "Django", "PostgreSQL"],
      liveUrl: "https://registry.terraform.io",
      githubUrl: "https://github.com/VIncentTetteh/terraform-django-elastic-beanstalk-deployment",
      featured: true
    },
    {
      title: "Terraform VPC Deployment Automation",
      description: "Automated deployment of AWS VPCs using existing Terraform modules. Includes subnets, route tables, NAT gateways, and security controls with CIS + PCI DSS compliance.",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=400&fit=crop",
      technologies: ["Terraform", "AWS VPC"],
      liveUrl: "https://registry.terraform.io",
      githubUrl: "https://github.com/VIncentTetteh/terraform-vpc-deployment-automation",
      featured: false
    },
    {
      title: "Terraform Cluster Autoscaler",
      description: "Kubernetes Cluster Autoscaler automation with Jenkins, Helm, and Terraform. Enables dynamic scaling of worker nodes while maintaining CIS + PCI DSS compliance.",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=600&h=400&fit=crop",
      technologies: ["Terraform", "Helm", "Jenkins", "Kubernetes"],
      liveUrl: "https://registry.terraform.io",
      githubUrl: "https://github.com/VIncentTetteh/terrform-cluster-autoscaler",
      featured: false
    },
    {
      title: "Terraform AWS Custom VPC",
      description: "Custom AWS VPC module with dynamic NAT gateway attachment. Provides secure networking foundations for cloud applications with PCI DSS + CIS compliance.",
      image: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=600&h=400&fit=crop",
      technologies: ["Terraform", "AWS VPC"],
      liveUrl: "https://registry.terraform.io",
      githubUrl: "https://github.com/VIncentTetteh/terraform-aws-custom-vpc",
      featured: false
    },
    {
      title: "Terraform AWS Target Group with Attachment",
      description: "AWS Terraform module for creating Target Groups and attaching them to ALBs or NLBs. Implements PCI DSS + CIS compliant security and logging.",
      image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?w=600&h=400&fit=crop",
      technologies: ["Terraform", "AWS ALB", "AWS NLB"],
      liveUrl: "https://registry.terraform.io",
      githubUrl: "https://github.com/VIncentTetteh/terraform-aws-target-group-with-attachment",
      featured: false
    },
    {
      title: "Terraform AWS S3",
      description: "Terraform module for secure AWS S3 bucket provisioning. Includes encryption, versioning, access logging, and PCI DSS + CIS compliance controls.",
      image: "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?w=600&h=400&fit=crop",
      technologies: ["Terraform", "AWS S3"],
      liveUrl: "https://registry.terraform.io",
      githubUrl: "https://github.com/VIncentTetteh/terraform-aws-s3",
      featured: true
    },
    {
      title: "Terraform AWS Nodegroups",
      description: "Terraform module for AWS EKS managed node groups. Supports autoscaling, spot instances, and PCI DSS + CIS compliant IAM/security policies.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      technologies: ["Terraform", "AWS EKS"],
      liveUrl: "https://registry.terraform.io",
      githubUrl: "https://github.com/VIncentTetteh/terraform-aws-nodegroups",
      featured: false
    },
    {
      title: "Terraform AWS MSK Serverless",
      description: "Terraform module for AWS MSK Serverless clusters with secure configurations, encryption, logging, and PCI DSS + CIS compliance.",
      image: "https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?w=600&h=400&fit=crop",
      technologies: ["Terraform", "AWS MSK", "Kafka"],
      liveUrl: "https://registry.terraform.io",
      githubUrl: "https://github.com/VIncentTetteh/terraform-aws-msk-serverless",
      featured: false
    },
    {
      title: "Terraform AWS Load Balancer",
      description: "Terraform module to deploy secure AWS Load Balancers (ALB/NLB). Enforces TLS, logging, and access restrictions for PCI DSS + CIS compliance.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      technologies: ["Terraform", "AWS ALB", "AWS NLB"],
      liveUrl: "https://registry.terraform.io",
      githubUrl: "https://github.com/VIncentTetteh/terraform-aws-load-balancer",
      featured: false
    },
    {
      title: "Terraform AWS Launch Template",
      description: "Terraform module for AWS EC2 Launch Templates with secure defaults, encryption, IAM roles, and PCI DSS + CIS compliance.",
      image: "https://images.unsplash.com/photo-1591696331115-3aa7f5e4f9a3?w=600&h=400&fit=crop",
      technologies: ["Terraform", "AWS EC2"],
      liveUrl: "https://registry.terraform.io",
      githubUrl: "https://github.com/VIncentTetteh/terraform-aws-launch_template",
      featured: false
    },
    {
      title: "Terraform AWS Lambda",
      description: "Terraform module for deploying AWS Lambda functions with IAM roles, VPC integration, logging, and PCI DSS + CIS compliance.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      technologies: ["Terraform", "AWS Lambda"],
      liveUrl: "https://registry.terraform.io",
      githubUrl: "https://github.com/VIncentTetteh/terraform-aws-lambda",
      featured: true
    },
    {
      title: "Terraform AWS Karpenter IAM",
      description: "Terraform module for creating and attaching IAM roles required by AWS Karpenter for EKS autoscaling. Secured with PCI DSS + CIS policies.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      technologies: ["Terraform", "AWS IAM", "Karpenter"],
      liveUrl: "https://registry.terraform.io",
      githubUrl: "https://github.com/VIncentTetteh/terraform-aws-karpenter_iam",
      featured: false
    },
    {
      title: "Terraform AWS ElastiCache Serverless",
      description: "Terraform module for provisioning AWS ElastiCache Serverless with encryption, IAM access policies, and PCI DSS + CIS compliance.",
      image: "https://images.unsplash.com/photo-1504610926078-a1611febcad3?w=600&h=400&fit=crop",
      technologies: ["Terraform", "AWS ElastiCache"],
      liveUrl: "https://registry.terraform.io",
      githubUrl: "https://github.com/VIncentTetteh/terraform-aws-elasticache-serverless",
      featured: false
    },
    {
      title: "Terraform AWS EKS Spot Nodegroup",
      description: "Terraform module for provisioning EKS spot node groups with autoscaling, secure IAM roles, and PCI DSS + CIS compliance.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop",
      technologies: ["Terraform", "AWS EKS", "Spot Instances"],
      liveUrl: "https://registry.terraform.io",
      githubUrl: "https://github.com/VIncentTetteh/terraform-aws-eks-spot-nodegroup",
      featured: false
    },
    {
      title: "Terraform AWS EKS Addons",
      description: "Terraform module to provision EKS addons like CoreDNS, VPC CNI, and kube-proxy. Ensures CIS + PCI DSS security compliance for cluster operations.",
      image: "https://images.unsplash.com/photo-1558494949-1f1dffb13fc0?w=600&h=400&fit=crop",
      technologies: ["Terraform", "AWS EKS"],
      liveUrl: "https://registry.terraform.io",
      githubUrl: "https://github.com/VIncentTetteh/terraform-aws-eks-addons",
      featured: false
    },
    {
      title: "Terraform AWS EKS with Managed Nodegroup",
      description: "Terraform module for complete EKS deployment with managed node groups. Implements secure networking, IAM, and monitoring controls for PCI DSS + CIS compliance.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop",
      technologies: ["Terraform", "AWS EKS"],
      liveUrl: "https://registry.terraform.io",
      githubUrl: "https://github.com/VIncentTetteh/terraform-aws-eks-with-manage-nodegroup",
      featured: true
    },
    {
      title: "Terraform AWS EKS",
      description: "Complete AWS EKS Terraform module designed with PCI DSS + CIS compliance. Includes VPC, nodegroups, addons, IAM, and secure cluster policies.",
      image: "https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?w=600&h=400&fit=crop",
      technologies: ["Terraform", "AWS EKS"],
      liveUrl: "https://registry.terraform.io",
      githubUrl: "https://github.com/VIncentTetteh/terraform-aws-eks",
      featured: false
    },
    {
      title: "Rego Policy as Code",
      description: "Policy as Code implementation for AWS resources using Open Policy Agent (OPA) and Rego policies. Enforces compliance and governance rules by codifying security and operational standards.",
      image: "https://images.unsplash.com/photo-1508780709619-79562169bc64?w=600&h=400&fit=crop",
      technologies: ["Open Policy Agent (OPA)", "Rego", "AWS"],
      liveUrl: "https://registry.terraform.io",
      githubUrl: "https://registry.terraform.io",
      featured: false
    },
    {
      title: "Custom Optimized Dockerfiles",
      description: "Custom Dockerfiles with multi-stage builds and distroless non-root images for enhanced security, performance, and reduced attack surface.",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&h=400&fit=crop",
      technologies: ["Docker", "Distroless", "Multi-Stage Builds"],
      liveUrl: "https://registry.terraform.io",
      githubUrl: "https://github.com/VIncentTetteh/custom-optimized-dockerfiles",
      featured: false
    },
    {
      title: "FSGL API",
      description: "Secure backend API built with Python FastAPI for financial services. Implements authentication, RBAC, and encrypted data handling with automated CI/CD to AWS ECS.",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&h=400&fit=crop",
      technologies: ["Python", "FastAPI", "AWS ECS", "GitHub Actions"],
      liveUrl: "https://registry.terraform.io",
      githubUrl: "https://github.com/VIncentTetteh/fsgl-api",
      featured: false
    },
    {
      title: "Client API",
      description: "Custom FastAPI backend for client operations, featuring JWT authentication, request validation, and automated deployment pipelines on AWS ECS.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
      technologies: ["Python", "FastAPI", "AWS ECS", "GitHub Actions"],
      liveUrl: "https://registry.terraform.io",
      githubUrl: "https://github.com/VIncentTetteh/clientApi",
      featured: false
    },
    {
      title: "End-to-End House Pricing Model",
      description: "End-to-end FastAPI service integrating ML models for dynamic house price prediction, with automated training, inference API, and deployment pipelines to AWS.",
      image: "https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?w=600&h=400&fit=crop",
      technologies: ["Python", "FastAPI", "Machine Learning", "AWS ECS", "GitHub Actions"],
      liveUrl: "https://registry.terraform.io",
      githubUrl: "https://github.com/VIncentTetteh/end-to-end-house-pricing-model",
      featured: true
    },
    {
      title: "Transaction Analytics API",
      description: "Scalable analytics API built with FastAPI for real-time transaction monitoring, anomaly detection, and secure data insights. Deployed on AWS ECS with GitHub Actions CI/CD.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["Python", "FastAPI", "AWS ECS", "GitHub Actions"],
      liveUrl: "https://registry.terraform.io",
      githubUrl: "https://github.com/VIncentTetteh/transaction_analytics_api",
      featured: false
    },
    {
      title: "Wittygen Edu App Backend",
      description: "Backend API for educational platform with FastAPI, implementing secure user management, course APIs, and role-based access control. Automated GitHub Actions CI/CD to AWS ECS.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop",
      technologies: ["Python", "FastAPI", "AWS ECS", "GitHub Actions"],
      liveUrl: "https://registry.terraform.io",
      githubUrl: "https://github.com/VIncentTetteh/wittygen-edu-app-backend-main",
      featured: false
    },
    {
      title: "Pentecost Welfare App",
      description: "Church welfare management system for handling member contributions, welfare requests, and disbursements. Built with Java and Spring Boot for structured record-keeping.",
      image: "https://images.unsplash.com/photo-1604014237744-4f78449e0f69?w=600&h=400&fit=crop",
      technologies: ["Java", "Spring Boot", "MySQL"],
      liveUrl: "https://registry.terraform.io",
      githubUrl: "https://github.com/VIncentTetteh/pentecost-welfare-app",
      featured: false
    },
    {
      title: "Todo App",
      description: "Simple task management application to add, update, and track todos. Demonstrates CRUD operations with Java and Spring Boot.",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&h=400&fit=crop",
      technologies: ["Java", "Spring Boot", "H2 Database"],
      liveUrl: "https://registry.terraform.io",
      githubUrl: "https://github.com/VIncentTetteh/todo-app",
      featured: false
    },
    {
      title: "Spring Security Example",
      description: "Example project showcasing Spring Security fundamentals including authentication, authorization, and method-level security.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      technologies: ["Java", "Spring Boot", "Spring Security"],
      liveUrl: "https://registry.terraform.io",
      githubUrl: "https://github.com/VIncentTetteh/spring-security-example",
      featured: false
    },
    {
      title: "Spring Security GitHub Auth",
      description: "Spring Security integration with GitHub OAuth for login and secure authentication flow.",
      image: "https://images.unsplash.com/photo-1549921296-3a6318c451f3?w=600&h=400&fit=crop",
      technologies: ["Java", "Spring Boot", "Spring Security", "OAuth2"],
      liveUrl: "https://registry.terraform.io",
      githubUrl: "https://github.com/VIncentTetteh/springsecurity-githubauth",
      featured: false
    },
    {
      title: "Spring Boot JWT",
      description: "Spring Boot project implementing JWT authentication and authorization for REST APIs.",
      image: "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?w=600&h=400&fit=crop",
      technologies: ["Java", "Spring Boot", "JWT", "Spring Security"],
      liveUrl: "https://registry.terraform.io",
      githubUrl: "https://github.com/VIncentTetteh/springboot-jwt",
      featured: true
    },
    {
      title: "Spring Boot Keycloak",
      description: "Spring Boot application integrated with Keycloak for role-based access control and authentication management.",
      image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?w=600&h=400&fit=crop",
      technologies: ["Java", "Spring Boot", "Keycloak", "Spring Security"],
      liveUrl: "https://registry.terraform.io",
      githubUrl: "https://github.com/VIncentTetteh/springboot-keycloak",
      featured: false
    },
    {
      title: "Spring Boot Security JWT Authentication",
      description: "Spring Boot + Security project with JWT authentication, authorization, and MySQL integration for token-based security.",
      image: "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?w=600&h=400&fit=crop",
      technologies: ["Java", "Spring Boot", "Spring Security", "JWT", "MySQL"],
      liveUrl: "https://registry.terraform.io",
      githubUrl: "https://github.com/VIncentTetteh/spring-boot-spring-security-jwt-authentication",
      featured: true
    },
    {
      title: "Infra360 Website",
      description: "Modern cloud infrastructure solutions website showcasing Infra360 services and offerings. Built with TypeScript and optimized for performance.",
      image: "https://images.unsplash.com/photo-1522199710521-72d69614c702?w=600&h=400&fit=crop",
      technologies: ["TypeScript", "Next.js", "TailwindCSS"],
      liveUrl: "https://registry.terraform.io",
      githubUrl: "https://github.com/VIncentTetteh/infra360-website",
      featured: false
    },
    {
      title: "Vincent Tetteh Portfolio Website",
      description: "Personal portfolio website highlighting projects, experience, and expertise in DevOps, Cloud, and MLOps engineering.",
      image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600&h=400&fit=crop",
      technologies: ["TypeScript", "Next.js", "TailwindCSS"],
      liveUrl: "https://registry.terraform.io",
      githubUrl: "https://github.com/VIncentTetteh/vincent-tetteh-portfolio-website",
      featured: true
    },
    {
      title: "Npuntu Website",
      description: "Official website for Npuntu, delivering information, updates, and digital presence with a clean, responsive TypeScript frontend.",
      image: "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?w=600&h=400&fit=crop",
      technologies: ["TypeScript", "React", "TailwindCSS"],
      liveUrl: "https://registry.terraform.io",
      githubUrl: "https://github.com/VIncentTetteh/npuntu",
      featured: false
    },
    {
      title: "Infra365 Website",
      description: "Website platform showcasing Infra365’s IT infrastructure and cloud-native solutions with a TypeScript-based frontend.",
      image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?w=600&h=400&fit=crop",
      technologies: ["TypeScript", "Next.js", "TailwindCSS"],
      liveUrl: "https://registry.terraform.io",
      githubUrl: "https://github.com/VIncentTetteh/infra365",
      featured: false
    },
  
    {
      title: "PureGrain Rice Website",
      description: "E-commerce-style website for PureGrain Rice, designed with Next.js to provide product information and customer engagement.",
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&h=400&fit=crop",
      technologies: ["TypeScript", "Next.js", "TailwindCSS"],
      liveUrl: "https://registry.terraform.io",
      githubUrl: "https://github.com/VIncentTetteh/puregrainrice-nextjs",
      featured: false
    },
    {
      title: "Angular Custom Library",
      description: "An Angular custom library example showcasing reusable UI components and TypeScript-based modular architecture.",
      image: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?w=600&h=400&fit=crop",
      technologies: ["TypeScript", "Angular"],
      liveUrl: "https://registry.terraform.io",
      githubUrl: "https://github.com/VIncentTetteh/angular-custom-library",
      featured: false
    },
    {
      title: "C# Sample Project",
      description: "A foundational C# sample project showcasing core concepts, clean architecture, and .NET coding practices.",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&h=400&fit=crop",
      technologies: ["C#", ".NET"],
      liveUrl: "https://registry.terraform.io",
      githubUrl: "https://github.com/VIncentTetteh/csharp-sample-project",
      featured: false
    },
    {
      title: "Order Processor Lambda",
      description: "A C#-based AWS Lambda function for processing orders asynchronously, optimized for scalability and serverless deployment.",
      image: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=600&h=400&fit=crop",
      technologies: ["C#", ".NET", "AWS Lambda"],
      liveUrl: "https://registry.terraform.io",
      githubUrl: "https://github.com/VIncentTetteh/order-processor-lambda",
      featured: true
    },
    {
      title: "Todo API (.NET Core)",
      description: "A .NET Core REST API for managing todo lists with CRUD operations, JWT authentication, and structured logging.",
      image: "https://images.unsplash.com/photo-1581091215367-59ab6a5dbec9?w=600&h=400&fit=crop",
      technologies: ["C#", ".NET Core", "REST API"],
      liveUrl: "https://registry.terraform.io",
      githubUrl: "https://github.com/VIncentTetteh/todoapi",
      featured: false
    },
    {
      title: "Book API",
      description: "A .NET CRUD API for managing books, featuring Entity Framework integration and RESTful best practices.",
      image: "https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=600&h=400&fit=crop",
      technologies: ["C#", ".NET", "Entity Framework"],
      liveUrl: "https://registry.terraform.io",
      githubUrl: "https://github.com/VIncentTetteh/book-api",
      featured: false
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A selection of my recent work showcasing full-stack development, 
              DevOps automation, and cloud architecture expertise
            </p>
          </motion.div>

          {/* Featured Projects */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project) => (
              <motion.div
                key={project.title}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-4">
                      {/* {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
                        >
                          <ArrowTopRightOnSquareIcon className="w-4 h-4 mr-1" />
                          Live Demo
                        </a>
                      )} */}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 hover:text-gray-700 font-medium transition-colors"
                      >
                        <CodeBracketIcon className="w-4 h-4 mr-1" />
                        Private Repository | Contact for review
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other Projects */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Other Notable Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <motion.div
                  key={project.title}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex gap-4">
                    {/* {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
                      >
                        Live Demo
                      </a>
                    )} */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-700 text-sm font-medium transition-colors"
                    >
                      Private Repository | Contact for review
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="text-center mt-12">
            <a
              href="https://github.com/vincenttetteh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              <CodeBracketIcon className="w-5 h-5 mr-2" />
              View GitHub Profile
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
