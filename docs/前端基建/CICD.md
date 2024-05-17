# CI/CD

## 定义

- 持续集成（Continuous Integration, CI）和 持续部署（Continuous Deployment, CD），主要包括版本控制，代码合并，构建，单测，部署等一系列前端工作流。

## Pipeline

- Pipeline 是由一系列的 Stages 组成的自动化工作流，每个 Stage 包含一个或多个 Jobs。Pipeline 是 GitLab CI/CD 的核心，定义了在代码库发生变化时自动执行的所有步骤。

## Stage

- Stage 是 Pipeline 中的一部分，定义了一组可以并行执行的 Jobs。Stages 是按**顺序执行**的，即只有当前 Stage 的所有 Jobs 成功完成后，才会进入下一个 Stage。

## Job

- Job 是 Pipeline 中的基本执行单元，定义了要执行的具体任务，比如构建、测试、部署等。
- 名字是可以自己定义的

## 配置

- **`.gitlab-ci.yml` 配置关键字**:
  - [`.gitlab-ci.yml` 全部配置关键字](https://docs.gitlab.com/ee/ci/yaml/#configuration-options)

- GitLab CI/CD 配置文件是 `.gitlab-ci.yml`，这个文件位于你的代码库的根目录中。下面是一个简单的 `.gitlab-ci.yml` 配置示例，包含了 Pipelines、Stages 和 Jobs 的定义：

  ```yaml
  stages:
    - build
    - test
    - deploy
  
  # Job 1: 编译代码
  build_job:
    stage: build
    script:
      - echo "Building the project..."
      - # 编译命令
    only:
      - master
  
  # Job 2: 运行单元测试
  test_job:
    stage: test
    script:
      - echo "Running tests..."
      - # 测试命令
    only:
      - merge_requests
  
  # Job 3: 部署代码
  deploy_job:
    stage: deploy
    script:
      - echo "Deploying the project..."
      - # 部署命令
    environment: production
    only:
      - tags
  
  ```

  